require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Electric Deluxe Recorders`,
    description: `Electric Deluxe Recorders is the personal studio of Grammy Award-winning producer, songwriter, and guitarist Adrian Quesada.`,
    author: `@brendanbond`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://el-deluxe-strapi.herokuapp.com",
        contentTypes: ["album", "photo"],
        singleTypes: ["gear-section"],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Electric Deluxe Recorders`,
        short_name: `El-Deluxe`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/el-deluxe-icon.png`, // This path is relative to the root of the site.
      },
    },
    //`gatsby-plugin-offline`
  ],
};
