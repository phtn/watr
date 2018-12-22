
module.exports = {
  siteMetadata: {
    title: `Watr`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Rajdhani`,
          `source sans-serif\:300|100` // you can also specify font weights and styles
        ]
      }
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}