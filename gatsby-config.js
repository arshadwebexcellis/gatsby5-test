module.exports = {
  siteMetadata: {
    title: `Gatsby 5 seo test`,
    description: `Gatsby 5 seo test description`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Other plugins
    {
      resolve: "gatsby-source-mongodb",
      options: {
        connectionString:
          "mongodb+srv://salvexCustomerApi:8GWkhmTaTNwDCNBF@salvexdev.byeuw8i.mongodb.net/salvexCustomer",
        dbName: "salvexCustomer",
        collection: "auctions",
      },
    },
  ],
};
