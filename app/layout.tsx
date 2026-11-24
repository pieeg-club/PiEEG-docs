import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PiEEG Documentation',
    template: '%s – PiEEG Docs',
  },
  description:
    'Complete documentation for PiEEG hardware, PiEEG Server software, and brain-computer interface integrations.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'PiEEG Documentation',
    description:
      'Complete documentation for PiEEG hardware, PiEEG Server software, and brain-computer interface integrations.',
  },
}

const navbar = (
  <Navbar
    logo={
      <span className="pieeg-brand">
        <img src="/logo.webp" alt="PiEEG" />
        <span className="pieeg-badge">Docs</span>
      </span>
    }
    projectLink="https://github.com/pieeg-club"
  />
)

const footer = (
  <Footer>
    <div className="pieeg-footer">
      <div className="pieeg-footer-grid">
        <div className="pieeg-footer-col">
          <h4>Documentation</h4>
          <ul>
            <li><a href="/hardware/">Hardware</a></li>
            <li><a href="/software/">Software</a></li>
            <li><a href="/cloud/">Cloud</a></li>
            <li><a href="/about/">About</a></li>
          </ul>
        </div>
        <div className="pieeg-footer-col">
          <h4>Platforms</h4>
          <ul>
            <li><a href="https://cloud.pieeg.com" target="_blank" rel="noreferrer">PiEEG Cloud</a></li>
            <li><a href="https://octobridge.pieeg.com/" target="_blank" rel="noreferrer">octoBridge</a></li>
            <li><a href="https://apps.garmin.com/apps/8e994535-c853-45ca-abe3-ccef61119c8b" target="_blank" rel="noreferrer">octoWatch (Garmin)</a></li>
          </ul>
        </div>
        <div className="pieeg-footer-col">
          <h4>Developers</h4>
          <ul>
            <li><a href="/software/api/websocket/">WebSocket API</a></li>
            <li><a href="/software/api/javascript-sdk/">JavaScript SDK</a></li>
            <li><a href="https://pypi.org/project/pieeg-server/" target="_blank" rel="noreferrer">PyPI (pieeg-server)</a></li>
            <li><a href="https://github.com/pieeg-club" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="pieeg-footer-bottom">
        <span>© {new Date().getFullYear()} PiEEG. Open-source brain-computer interface.</span>
        <span>Built with Nextra 4</span>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <Head color={{ hue: 198, saturation: 85 }} />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pieeg-club/PiEEG-docs"
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          toc={{
            backToTop: true,
          }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
