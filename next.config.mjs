import nextra from 'nextra'

const redirects = [
  { source: '/getting-started/:path*', destination: '/software/getting-started/:path*', permanent: true },
  { source: '/features/:path*', destination: '/software/features/:path*', permanent: true },
  { source: '/api/:path*', destination: '/software/api/:path*', permanent: true },
  { source: '/integrations/:path*', destination: '/software/integrations/:path*', permanent: true },
  { source: '/reference/:path*', destination: '/software/reference/:path*', permanent: true },
  { source: '/docs/docs', destination: '/hardware', permanent: true },
  { source: '/docs/docs/merlin', destination: '/hardware/safety/liabilities', permanent: true },
  { source: '/docs/docs/how-easy-eliminate-noise-during-eeg-measurement', destination: '/hardware/signal-quality/noise-elimination', permanent: true },
  { source: '/docs/docs/electrodes', destination: '/hardware/accessories/electrodes', permanent: true },
  { source: '/docs/docs/cap', destination: '/hardware/accessories/cap', permanent: true },
  { source: '/docs/docs/power-bank', destination: '/hardware/accessories/power-bank', permanent: true },
  { source: '/docs/docs/pieeg', destination: '/hardware/devices/pieeg', permanent: true },
  { source: '/docs/docs/pieeg/what-need-equipoment-except-pieeg', destination: '/hardware/devices/pieeg/required-equipment', permanent: true },
  { source: '/docs/docs/pieeg/how-to-start-connections', destination: '/hardware/devices/pieeg/connections', permanent: true },
  { source: '/docs/docs/pieeg/how-to-start-software', destination: '/hardware/devices/pieeg/software', permanent: true },
  { source: '/docs/docs/pieeg-16', destination: '/hardware/devices/pieeg-16', permanent: true },
  { source: '/docs/docs/pieeg-16/what-need-equipoment-except-pieeg-16', destination: '/hardware/devices/pieeg-16/required-equipment', permanent: true },
  { source: '/docs/docs/pieeg-16/how-to-start-connections-with-pieeg-16', destination: '/hardware/devices/pieeg-16/connections', permanent: true },
  { source: '/docs/docs/pieeg-16/how-to-start-software-with-pieeg-16', destination: '/hardware/devices/pieeg-16/software', permanent: true },
  { source: '/docs/docs/jneeg', destination: '/hardware/devices/jneeg', permanent: true },
  { source: '/docs/docs/jneeg/hat-need-equipoment-except-jneeg', destination: '/hardware/devices/jneeg/required-equipment', permanent: true },
  { source: '/docs/docs/jneeg/how-to-start-connections-with-jneeg', destination: '/hardware/devices/jneeg/connections', permanent: true },
  { source: '/docs/docs/jneeg/how-to-start-software-with-jneeg', destination: '/hardware/devices/jneeg/software', permanent: true },
  { source: '/docs/docs/ardeeg', destination: '/hardware/devices/ardeeg', permanent: true },
  { source: '/docs/docs/ardeeg/what-need-equipoment-except-ardeeg', destination: '/hardware/devices/ardeeg/required-equipment', permanent: true },
  { source: '/docs/docs/ardeeg/how-to-start-connections-with-ardeeg', destination: '/hardware/devices/ardeeg/connections', permanent: true },
  { source: '/docs/docs/ardeeg/how-to-start-software-with-ardeeg', destination: '/hardware/devices/ardeeg/software', permanent: true },
  { source: '/docs/docs/ironbci', destination: '/hardware/devices/ironbci', permanent: true },
  { source: '/docs/docs/ironbci/1-2', destination: '/hardware/devices/ironbci/version-1-2', permanent: true },
  { source: '/docs/docs/ironbci/w', destination: '/hardware/devices/ironbci/wireless', permanent: true },
  { source: '/docs/docs/ironbci/video-indruction', destination: '/hardware/devices/ironbci/video-instruction', permanent: true },
  { source: '/docs/docs/microbci', destination: '/hardware/devices/microbci', permanent: true },
  { source: '/docs/docs/microbci/how-to-start', destination: '/hardware/devices/microbci/how-to-start', permanent: true },
  { source: '/docs/docs/microbci/software', destination: '/hardware/devices/microbci/software', permanent: true },
  { source: '/docs/docs/microbci/video-introduction', destination: '/hardware/devices/microbci/video-introduction', permanent: true },
  { source: '/docs/docs/ironbci-32', destination: '/hardware/devices/ironbci-32', permanent: true },
  { source: '/docs/docs/ironbci-32/how-to-start', destination: '/hardware/devices/ironbci-32/how-to-start', permanent: true },
  { source: '/docs/docs/ironbci-32/how-connect-cables', destination: '/hardware/devices/ironbci-32/cable-connections', permanent: true },
  { source: '/docs/docs/ironbci-32/software', destination: '/hardware/devices/ironbci-32/software', permanent: true },
  { source: '/liability', destination: '/hardware/safety/liabilities', permanent: true },
]

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({
  output: 'standalone',
  async redirects() {
    return redirects
  },
})
