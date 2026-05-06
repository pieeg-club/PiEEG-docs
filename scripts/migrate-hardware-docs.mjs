import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceRoot = path.join(root, 'old', 'pieeg.com', 'docs', 'docs')
const hardwareRoot = path.join(root, 'pages', 'hardware')

const pages = [
  ['pieeg/index.html', 'devices/pieeg/index.mdx', 'PiEEG'],
  ['pieeg/what-need-equipoment-except-pieeg/index.html', 'devices/pieeg/required-equipment.mdx', 'Required Equipment'],
  ['pieeg/how-to-start-connections/index.html', 'devices/pieeg/connections.mdx', 'Connections'],
  ['pieeg/how-to-start-software/index.html', 'devices/pieeg/software.mdx', 'Software Setup'],
  ['pieeg-16/index.html', 'devices/pieeg-16/index.mdx', 'PiEEG-16'],
  ['pieeg-16/what-need-equipoment-except-pieeg-16/index.html', 'devices/pieeg-16/required-equipment.mdx', 'Required Equipment'],
  ['pieeg-16/how-to-start-connections-with-pieeg-16/index.html', 'devices/pieeg-16/connections.mdx', 'Connections'],
  ['pieeg-16/how-to-start-software-with-pieeg-16/index.html', 'devices/pieeg-16/software.mdx', 'Software Setup'],
  ['jneeg/index.html', 'devices/jneeg/index.mdx', 'JNEEG'],
  ['jneeg/hat-need-equipoment-except-jneeg/index.html', 'devices/jneeg/required-equipment.mdx', 'Required Equipment'],
  ['jneeg/how-to-start-connections-with-jneeg/index.html', 'devices/jneeg/connections.mdx', 'Connections'],
  ['jneeg/how-to-start-software-with-jneeg/index.html', 'devices/jneeg/software.mdx', 'Software Setup'],
  ['ardeeg/index.html', 'devices/ardeeg/index.mdx', 'ardEEG'],
  ['ardeeg/what-need-equipoment-except-ardeeg/index.html', 'devices/ardeeg/required-equipment.mdx', 'Required Equipment'],
  ['ardeeg/how-to-start-connections-with-ardeeg/index.html', 'devices/ardeeg/connections.mdx', 'Connections'],
  ['ardeeg/how-to-start-software-with-ardeeg/index.html', 'devices/ardeeg/software.mdx', 'Software Setup'],
  ['ironbci/index.html', 'devices/ironbci/index.mdx', 'IronBCI'],
  ['ironbci/1-2/index.html', 'devices/ironbci/version-1-2.mdx', 'Version 1.2'],
  ['ironbci/w/index.html', 'devices/ironbci/wireless.mdx', 'Wireless'],
  ['ironbci/video-indruction/index.html', 'devices/ironbci/video-instruction.mdx', 'Video Instruction'],
  ['microbci/index.html', 'devices/microbci/index.mdx', 'MicroBCI'],
  ['microbci/how-to-start/index.html', 'devices/microbci/how-to-start.mdx', 'How to Start'],
  ['microbci/software/index.html', 'devices/microbci/software.mdx', 'Software'],
  ['microbci/video-introduction/index.html', 'devices/microbci/video-introduction.mdx', 'Video Introduction'],
  ['ironbci-32/index.html', 'devices/ironbci-32/index.mdx', 'IronBCI-32'],
  ['ironbci-32/how-to-start/index.html', 'devices/ironbci-32/how-to-start.mdx', 'How to Start'],
  ['ironbci-32/how-connect-cables/index.html', 'devices/ironbci-32/cable-connections.mdx', 'Cable Connections'],
  ['ironbci-32/software/index.html', 'devices/ironbci-32/software.mdx', 'Software'],
  ['electrodes/index.html', 'accessories/electrodes.mdx', 'Electrodes'],
  ['cap/index.html', 'accessories/cap.mdx', 'Cap'],
  ['power-bank/index.html', 'accessories/power-bank.mdx', 'Power Bank'],
  ['how-easy-eliminate-noise-during-eeg-measurement/index.html', 'signal-quality/noise-elimination.mdx', 'Noise Elimination'],
  ['merlin/index.html', 'safety/liabilities.mdx', 'Liabilities'],
]

const metas = [
  ['_meta.json', {
    index: 'Overview',
    devices: 'Devices',
    accessories: 'Accessories',
    'signal-quality': 'Signal Quality',
    safety: 'Safety',
  }],
  ['devices/_meta.json', {
    index: 'Device Overview',
    pieeg: 'PiEEG',
    'pieeg-16': 'PiEEG-16',
    jneeg: 'JNEEG',
    ardeeg: 'ardEEG',
    ironbci: 'IronBCI',
    microbci: 'MicroBCI',
    'ironbci-32': 'IronBCI-32',
  }],
  ['devices/pieeg/_meta.json', { index: 'Overview', 'required-equipment': 'Required Equipment', connections: 'Connections', software: 'Software Setup' }],
  ['devices/pieeg-16/_meta.json', { index: 'Overview', 'required-equipment': 'Required Equipment', connections: 'Connections', software: 'Software Setup' }],
  ['devices/jneeg/_meta.json', { index: 'Overview', 'required-equipment': 'Required Equipment', connections: 'Connections', software: 'Software Setup' }],
  ['devices/ardeeg/_meta.json', { index: 'Overview', 'required-equipment': 'Required Equipment', connections: 'Connections', software: 'Software Setup' }],
  ['devices/ironbci/_meta.json', { index: 'Overview', 'version-1-2': 'Version 1.2', wireless: 'Wireless', 'video-instruction': 'Video Instruction' }],
  ['devices/microbci/_meta.json', { index: 'Overview', 'how-to-start': 'How to Start', software: 'Software', 'video-introduction': 'Video Introduction' }],
  ['devices/ironbci-32/_meta.json', { index: 'Overview', 'how-to-start': 'How to Start', 'cable-connections': 'Cable Connections', software: 'Software' }],
  ['accessories/_meta.json', { index: 'Overview', electrodes: 'Electrodes', cap: 'Cap', 'power-bank': 'Power Bank' }],
  ['signal-quality/_meta.json', { index: 'Overview', 'noise-elimination': 'Noise Elimination' }],
  ['safety/_meta.json', { index: 'Overview', liabilities: 'Liabilities' }],
]

const manualPages = new Map([
  ['index.mdx', `---
title: PiEEG Hardware
description: Hardware documentation for PiEEG devices, accessories, setup, and signal quality.
---

import { Cards, Callout } from 'nextra/components'

# PiEEG Hardware

Hardware documentation for the PiEEG device family, including setup, required equipment, electrode connections, accessories, and signal-quality guidance.

<Callout type="info">
  These pages were migrated from the PiEEG hardware documentation archive and checked against the live pieeg.com docs navigation.
</Callout>

<Cards>
  <Cards.Card title="Device Overview" href="/hardware/devices" />
  <Cards.Card title="PiEEG" href="/hardware/devices/pieeg" />
  <Cards.Card title="PiEEG-16" href="/hardware/devices/pieeg-16" />
  <Cards.Card title="IronBCI-32" href="/hardware/devices/ironbci-32" />
  <Cards.Card title="Accessories" href="/hardware/accessories" />
  <Cards.Card title="Signal Quality" href="/hardware/signal-quality/noise-elimination" />
</Cards>

## Support

All scripts, software, datasets, and manuals are available from the [PiEEG Club GitHub](https://github.com/pieeg-club). For questions, use the PiEEG [Discord](https://discord.gg/5Ps24p47) or [Forum](https://pieeg.com/forum-pieeg-low-cost-brain-computer-interface/).
`],
  ['devices/index.mdx', `---
title: PiEEG Devices
description: Browse hardware documentation for supported PiEEG devices.
---

import { Cards } from 'nextra/components'

# PiEEG Devices

Choose a device to view setup, connection, and software guidance.

<Cards>
  <Cards.Card title="PiEEG" href="/hardware/devices/pieeg" />
  <Cards.Card title="PiEEG-16" href="/hardware/devices/pieeg-16" />
  <Cards.Card title="JNEEG" href="/hardware/devices/jneeg" />
  <Cards.Card title="ardEEG" href="/hardware/devices/ardeeg" />
  <Cards.Card title="IronBCI" href="/hardware/devices/ironbci" />
  <Cards.Card title="MicroBCI" href="/hardware/devices/microbci" />
  <Cards.Card title="IronBCI-32" href="/hardware/devices/ironbci-32" />
</Cards>
`],
  ['devices/ironbci/index.mdx', `---
title: "IronBCI"
---

import { Cards } from 'nextra/components'

# IronBCI

IronBCI documentation for device setup, wireless software, and video instructions.

<Cards>
  <Cards.Card title="Version 1.2" href="/hardware/devices/ironbci/version-1-2" />
  <Cards.Card title="Wireless" href="/hardware/devices/ironbci/wireless" />
  <Cards.Card title="Video Instruction" href="/hardware/devices/ironbci/video-instruction" />
</Cards>
`],
  ['devices/microbci/index.mdx', `---
title: "MicroBCI"
---

import { Cards } from 'nextra/components'

# MicroBCI

MicroBCI documentation for setup, firmware/software, and video instructions.

<Cards>
  <Cards.Card title="How to Start" href="/hardware/devices/microbci/how-to-start" />
  <Cards.Card title="Software" href="/hardware/devices/microbci/software" />
  <Cards.Card title="Video Introduction" href="/hardware/devices/microbci/video-introduction" />
</Cards>
`],
  ['devices/ironbci-32/index.mdx', `---
title: "IronBCI-32"
---

import { Cards } from 'nextra/components'

# IronBCI-32

IronBCI-32 documentation for startup, cable connections, and software workflows.

<Cards>
  <Cards.Card title="How to Start" href="/hardware/devices/ironbci-32/how-to-start" />
  <Cards.Card title="Cable Connections" href="/hardware/devices/ironbci-32/cable-connections" />
  <Cards.Card title="Software" href="/hardware/devices/ironbci-32/software" />
</Cards>
`],
  ['accessories/index.mdx', `---
title: Hardware Accessories
description: Accessories used with PiEEG hardware.
---

import { Cards } from 'nextra/components'

# Hardware Accessories

Shared accessory documentation for electrodes, caps, and power supplies.

<Cards>
  <Cards.Card title="Electrodes" href="/hardware/accessories/electrodes" />
  <Cards.Card title="Cap" href="/hardware/accessories/cap" />
  <Cards.Card title="Power Bank" href="/hardware/accessories/power-bank" />
</Cards>
`],
  ['signal-quality/index.mdx', `---
title: Signal Quality
description: Guidance for improving EEG measurement quality.
---

import { Cards } from 'nextra/components'

# Signal Quality

Guidance for reducing noise and improving measurement quality during EEG recordings.

<Cards>
  <Cards.Card title="Noise Elimination" href="/hardware/signal-quality/noise-elimination" />
</Cards>
`],
  ['safety/index.mdx', `---
title: Safety
description: Safety and liability information for PiEEG hardware.
---

import { Cards } from 'nextra/components'

# Safety

Safety, liability, and responsible-use notes for PiEEG hardware.

<Cards>
  <Cards.Card title="Liabilities" href="/hardware/safety/liabilities" />
</Cards>
`],
])

function ensureDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

function write(relativePath, content) {
  const filePath = path.join(hardwareRoot, relativePath)
  ensureDirectory(filePath)
  fs.writeFileSync(filePath, content.replace(/\r\n/g, '\n').trimEnd() + '\n')
}

function decodeHtml(value) {
  return value
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#8211;|&#8212;|&ndash;|&mdash;/g, '-')
    .replace(/&#8216;|&#8217;|&lsquo;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8230;|&hellip;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&#x2F;/g, '/')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'))
  return match ? decodeHtml(match[1]) : ''
}

function normalizeUrl(value) {
  if (!value) return ''
  let url = decodeHtml(value).trim()

  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'www.google.com' && parsed.pathname === '/url' && parsed.searchParams.has('q')) {
      url = parsed.searchParams.get('q') ?? url
    }
  } catch {
    // Keep relative URLs below.
  }

  const uploadIndex = url.indexOf('wp-content/uploads/')
  if (uploadIndex >= 0) {
    return `https://pieeg.com/${url.slice(uploadIndex)}`
  }

  if (/^https?:\/\//i.test(url) || url.startsWith('mailto:') || url.startsWith('#')) {
    return url
  }

  if (url.includes('liability/index.html')) {
    return '/hardware/safety/liabilities'
  }

  if (url.includes('how-easy-eliminate-noise-during-eeg-measurement/index.html')) {
    return '/hardware/signal-quality/noise-elimination'
  }

  const legacyNews = new Map([
    ['92', 'https://pieeg.com/product/dry-electrodes/'],
    ['312', 'https://pieeg.com/product/emg-electrodes/'],
    ['425', 'https://pieeg.com/news/brain-computer-interface-with-chat-chatgpt-in-real-time-with-pieeg/'],
    ['689', 'https://pieeg.com/product/eeg-electrodes/'],
    ['805', 'https://pieeg.com/news/how-to-programming-the-ads1299/'],
    ['799', 'https://pieeg.com/news/instruction-how-to-use-machine-learning-to-stress-or-emoinal-control-via-eeg/'],
    ['929', '/hardware/safety/liabilities'],
    ['936', '/hardware/signal-quality/noise-elimination'],
  ])
  const postId = url.match(/index\.html@p=(\d+)\.html/i)?.[1]
  if (postId && legacyNews.has(postId)) {
    return legacyNews.get(postId)
  }

  return url
}

function extractContent(html) {
  const divPattern = /<div\b[^>]*class=["'][^"']*doc-content-wrap[^"']*["'][^>]*>/i
  const match = divPattern.exec(html)
  if (!match) return ''

  const start = match.index
  const openEnd = start + match[0].length
  const tagPattern = /<\/?div\b[^>]*>/gi
  tagPattern.lastIndex = start
  let depth = 0
  let tagMatch

  while ((tagMatch = tagPattern.exec(html))) {
    const tag = tagMatch[0]
    const isClosing = /^<\//.test(tag)
    const isSelfClosing = /\/>$/.test(tag)

    if (!isClosing && !isSelfClosing) depth += 1
    if (isClosing) depth -= 1
    if (depth === 0) return html.slice(openEnd, tagMatch.index)
  }

  return html.slice(openEnd)
}

function extractTitle(html, fallback) {
  const title = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  return title ? stripTags(title[1]) : fallback
}

function convertHtmlToMarkdown(html) {
  let content = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\r/g, '')

  content = content.replace(/<iframe\b([^>]*)>[\s\S]*?<\/iframe>/gi, (_, attrs) => {
    const title = getAttribute(attrs, 'title') || 'Video'
    const src = normalizeUrl(getAttribute(attrs, 'src'))
    return src ? `\n\n[${title}](${src})\n\n` : ''
  })

  content = content.replace(/<a\b([^>]*)>\s*(<img\b[^>]*>)\s*<\/a>/gi, (_, anchorAttrs, imageTag) => {
    const href = normalizeUrl(getAttribute(anchorAttrs, 'href'))
    const src = normalizeUrl(getAttribute(imageTag, 'src'))
    const alt = stripTags(getAttribute(imageTag, 'alt')) || 'Image'
    return `\n\n![${alt}](${href || src})\n\n`
  })

  content = content.replace(/<img\b([^>]*)\/?\s*>/gi, (_, attrs) => {
    const src = normalizeUrl(getAttribute(attrs, 'src'))
    const alt = stripTags(getAttribute(attrs, 'alt')) || 'Image'
    return src ? `\n\n![${alt}](${src})\n\n` : ''
  })

  content = content.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, text) => {
    const href = normalizeUrl(getAttribute(attrs, 'href'))
    const label = stripTags(text) || href
    return href ? `[${label}](${href})` : label
  })

  content = content
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, text) => `\n\n## ${stripTags(text)}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, text) => `\n\n### ${stripTags(text)}\n\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, text) => `\n\n#### ${stripTags(text)}\n\n`)
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, text) => `\n\n\`\`\`\n${stripTags(text)}\n\`\`\`\n\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `\n- ${stripTags(text)}`)
    .replace(/<\/ul>|<\/ol>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, text) => `\n\n${text.trim()}\n\n`)
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/<[^>]+>/g, '')

  content = decodeHtml(content)
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/ +/g, ' ')
    .trim()

  return content || 'Content migration pending.'
}

function frontmatter(title) {
  const safeTitle = title.replace(/"/g, '\\"')
  return `---\ntitle: "${safeTitle}"\n---\n\n`
}

function cleanMarkdown(destination, body) {
  if (destination === 'devices/ironbci-32/how-to-start.mdx') {
    return body
      .replace(/Please read the \[liability\]\([^)]*\)\.?/i, 'Please read the [liability information](/hardware/safety/liabilities).')
      .replace(/\[Information\]\([^)]*\) to Reduce noise during measurement\.?/i, 'See [noise elimination guidance](/hardware/signal-quality/noise-elimination) to reduce noise during measurement.')
  }

  if (destination === 'devices/microbci/how-to-start.mdx') {
    return body.replace(
      /To measure the EEG, also EEG cap kit for \[dry\]\([^)]*\)\s*or\s*\[wet\]\([^)]*\) electrodes, or an EMG\s*\[kit\]\([^)]*\)\.?/i,
      'To measure EEG, use an EEG cap kit with [dry electrodes](https://pieeg.com/product/dry-electrodes/), [wet electrodes](https://pieeg.com/product/eeg-electrodes/), or an [EMG kit](https://pieeg.com/product/emg-electrodes/).',
    )
  }

  return body
}

function migratePage([source, destination, fallbackTitle]) {
  const sourcePath = path.join(sourceRoot, source)
  const html = fs.readFileSync(sourcePath, 'utf8')
  const title = extractTitle(html, fallbackTitle)
  const body = cleanMarkdown(destination, convertHtmlToMarkdown(extractContent(html)))
  write(destination, `${frontmatter(title)}# ${title}\n\n${body}\n`)
}

for (const page of pages) {
  migratePage(page)
}

for (const [relativePath, content] of manualPages) {
  write(relativePath, content)
}

for (const [relativePath, meta] of metas) {
  write(relativePath, JSON.stringify(meta, null, 2))
}

console.log(`Migrated ${pages.length} hardware pages into ${path.relative(root, hardwareRoot)}`)