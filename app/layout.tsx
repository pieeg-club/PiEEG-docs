import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'PiEEG Documentation',
    template: '%s – PiEEG Docs',
  },
  description:
    'Complete documentation for PiEEG hardware, PiEEG Server software, and brain-computer interface integrations.',
  icons: {
    icon: '/logo.webp',
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
      <img
        src="/logo.webp"
        alt="PiEEG"
        style={{ height: '1.75rem', width: 'auto', borderRadius: '4px' }}
      />
    }
    projectLink="https://github.com/pieeg-club"
  />
)

const footer = (
  <Footer>
    <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
      © {new Date().getFullYear()} PiEEG. Open-source brain-computer interface.
    </span>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 200, saturation: 80 }} />
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
