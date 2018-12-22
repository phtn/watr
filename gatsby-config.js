module.exports = {
  siteMetadata: {
    title: `I like Google fonts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rajdhani`,
          `source sans-serif\:300` // you can also specify font weights and styles
        ]
      }
    }
  ]
}