const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Watr`
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
    },
    {
      reosolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}