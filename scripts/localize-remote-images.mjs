import fs from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import http from 'node:http'
import https from 'node:https'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'

const root = process.cwd()
const contentRoot = path.join(root, 'pages')
const publicRoot = path.join(root, 'public')
const imageRoot = path.join(publicRoot, 'images', 'hardware')
const remoteBase = 'https://pieeg.com/wp-content/uploads/'
const remoteImagePattern = /https:\/\/pieeg\.com\/wp-content\/uploads\/[^\s)'"<>]+/g
const force = process.argv.includes('--force')

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function listMdxFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await listMdxFiles(entryPath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(entryPath)
    }
  }

  return files
}

function sanitizeSegment(segment) {
  let decoded = segment

  try {
    decoded = decodeURIComponent(segment)
  } catch {
    decoded = segment
  }

  return decoded.replace(/[<>:"\\|?*\u0000-\u001f]/g, '-').replace(/^\.+$/, '-')
}

function getLocalImagePaths(remoteUrl) {
  const url = new URL(remoteUrl)
  const uploadsIndex = url.pathname.indexOf('/wp-content/uploads/')
  const relativePath = url.pathname.slice(uploadsIndex + '/wp-content/uploads/'.length)
  const safeSegments = relativePath.split('/').filter(Boolean).map(sanitizeSegment)
  const localPath = path.join(imageRoot, ...safeSegments)
  const publicPath = `/images/hardware/${safeSegments.map(encodeURIComponent).join('/')}`

  return { localPath, publicPath }
}

function download(remoteUrl, destination, redirects = 0) {
  const parsedUrl = new URL(remoteUrl)
  const client = parsedUrl.protocol === 'http:' ? http : https

  return new Promise((resolve, reject) => {
    const request = client.get(parsedUrl, {
      headers: {
        'User-Agent': 'PiEEG-docs-image-localizer/1.0',
      },
    }, response => {
      const status = response.statusCode ?? 0
      const location = response.headers.location

      if ([301, 302, 303, 307, 308].includes(status) && location) {
        response.resume()

        if (redirects >= 5) {
          reject(new Error(`Too many redirects for ${remoteUrl}`))
          return
        }

        const redirectedUrl = new URL(location, remoteUrl).toString()
        download(redirectedUrl, destination, redirects + 1).then(resolve, reject)
        return
      }

      if (status < 200 || status >= 300) {
        response.resume()
        reject(new Error(`Download failed for ${remoteUrl}: HTTP ${status}`))
        return
      }

      pipeline(response, createWriteStream(destination)).then(resolve, reject)
    })

    request.on('error', reject)
    request.setTimeout(30000, () => {
      request.destroy(new Error(`Download timed out for ${remoteUrl}`))
    })
  })
}

async function collectRemoteImages(files) {
  const fileContents = new Map()
  const remoteUrls = new Set()

  for (const filePath of files) {
    const content = await fs.readFile(filePath, 'utf8')
    fileContents.set(filePath, content)

    for (const match of content.matchAll(remoteImagePattern)) {
      remoteUrls.add(match[0])
    }
  }

  return { fileContents, remoteUrls }
}

async function main() {
  if (!await exists(contentRoot)) {
    throw new Error(`Pages directory not found: ${contentRoot}`)
  }

  const files = await listMdxFiles(contentRoot)
  const { fileContents, remoteUrls } = await collectRemoteImages(files)

  if (remoteUrls.size === 0) {
    console.log('No remote PiEEG upload images found.')
    return
  }

  const replacements = new Map()
  let downloaded = 0
  let skipped = 0

  for (const remoteUrl of [...remoteUrls].sort()) {
    const { localPath, publicPath } = getLocalImagePaths(remoteUrl)
    replacements.set(remoteUrl, publicPath)

    await fs.mkdir(path.dirname(localPath), { recursive: true })

    if (!force && await exists(localPath)) {
      skipped += 1
      continue
    }

    const temporaryPath = `${localPath}.download`
    await download(remoteUrl, temporaryPath)
    await fs.rename(temporaryPath, localPath)
    downloaded += 1
  }

  let changedFiles = 0
  let changedReferences = 0

  for (const [filePath, content] of fileContents) {
    let nextContent = content

    for (const [remoteUrl, publicPath] of replacements) {
      const occurrences = nextContent.split(remoteUrl).length - 1

      if (occurrences > 0) {
        changedReferences += occurrences
        nextContent = nextContent.replaceAll(remoteUrl, publicPath)
      }
    }

    if (nextContent !== content) {
      await fs.writeFile(filePath, nextContent)
      changedFiles += 1
    }
  }

  console.log(`Localized ${remoteUrls.size} unique image(s).`)
  console.log(`Downloaded: ${downloaded}; skipped existing: ${skipped}.`)
  console.log(`Rewrote ${changedReferences} reference(s) across ${changedFiles} file(s).`)
}

main().catch(error => {
  console.error(error.message)
  process.exitCode = 1
})