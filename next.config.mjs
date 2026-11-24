import nextra from 'nextra'

const withNextra = nextra({
  // Nextra v4 options
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
})
