module.exports = {
  siteMetadata: {
    title: `Portfolio Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/gatsby-portfolio",
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};