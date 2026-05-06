import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <Image src="/logo.webp" alt="PiEEG" height={28} width={28} style={{ height: '1.75rem', width: 'auto', borderRadius: '4px' }} unoptimized />
  ),
  project: {
    link: 'https://github.com/pieeg-club',
  },
  docsRepositoryBase: 'https://github.com/pieeg-club/PiEEG-docs',
  footer: {
    text: (
      <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} PiEEG. Open-source brain-computer interface.
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PiEEG Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PiEEG Documentation" />
      <meta property="og:description" content="Complete documentation for PiEEG hardware, PiEEG Server software, and brain-computer interface integrations." />
    </>
  ),
  primaryHue: 200,
  primarySaturation: 80,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
}

export default config
