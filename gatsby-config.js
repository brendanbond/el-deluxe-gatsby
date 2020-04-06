require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Electric Deluxe Recorders`,
    description: `Electric Deluxe Recorders is the personal studio of Grammy Award-winning producer, songwriter, and guitarist Adrian Quesada.`,
    author: `@brendanbond`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "ApplicationFee",
          "Sku",
          "Subscription"
        ],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://el-deluxe-strapi.herokuapp.com",
        contentTypes: ["album", "photo"],
        singleTypes: ["gear-section"],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    //d`gatsby-plugin-offline`
  ]
};
