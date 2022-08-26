module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby and WordPress Demo Starter`,
    defaultDescription: `Demo starter for combining Gatsby and WordPress. Created for the LinkedIn Learning course "Building a Headless WordPress Site with Gatsby" and based on Gatsby Default Starter by @gatsbyjs`,
    author: `@mor10`,
    siteUrl: `https://www.yourdomain.tld`,
    logo: `/logo.png`,
    twitter: `@mor10`,
  },
  // assetPrefix: 'http://10.0.0.112:8888/gatsby-wp/gwp/public/',
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // url: "http://10.0.0.111:8888/graphql",
        url: "https://proudbusiness.com/gatsby/graphql",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
