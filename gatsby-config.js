module.exports = {
  siteMetadata: {
    title: `Programactor.design`,
    description: `Designing premium Brand/Interface and Developing users-friendly Mobile/Web Apps since 2015.
    `,
    author: `@JesseIkolo`,
    twitter_site: `@ProgramactorInc`,
    facebook: `@Programactor`,
    card_image : ".src/images/twitter-card.png"
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
        ? "https://pa-website-api.herokuapp.com"
        : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`, `clients`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
