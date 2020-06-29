module.exports = {
  siteMetadata: {
    title: `Khaled Maher | Software Engineer`,
    description: `The Realm you want to know more about...`,
    author: `@maxios`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-manifest",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@atoms": "src/components/atoms",
          "@molecules": "src/components/molecules",
          "@organisms": "src/components/organisms",
          "@constants": "src/constants",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@images": "src/images",
          "@styles": "src/styles"
        },
        extensions: [
          "js",
        ],
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
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
