module.exports = {
  siteMetadata: {
    title: `Main-Kinzig-Nerds`,
    description: `Das Netzwerk für Software People im Main-Kinzig-Kreis`,
    author: `Philipp Jardas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `main-kinzig-nerds-website`,
        short_name: `mkn`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0f3c05`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
