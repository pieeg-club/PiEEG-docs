import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>PiEEG Documentation</span>,
  project: {
    link: 'https://github.com/pieeg/pieeg',
  },
  docsRepositoryBase: 'https://github.com/pieeg/pieeg-docs',
  footer: {
    text: `© ${new Date().getFullYear()} PiEEG. All rights reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PiEEG'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PiEEG Documentation" />
      <meta property="og:description" content="Official documentation for PiEEG" />
    </>
  ),
  primaryHue: 200,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
}

export default config
