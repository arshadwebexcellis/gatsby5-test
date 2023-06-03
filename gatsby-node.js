const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query product data from MongoDB
  const productData = await graphql(`
    {
      allMongodbSalvexCustomerAuctions {
        edges {
          node {
            id
            primaryPicture
            mongodb_id
            categorySlug
            quantity
            unit
            traderCompany
            title
          }
        }
      }
    }
  `);

  if (productData.errors) {
    throw new Error(productData.errors);
  }
  // Create individual product pages
  const products = productData.data.allMongodbSalvexCustomerAuctions.edges;

  products.forEach(({ node }) => {
    console.log(`/products/${node.mongodb_id}`, node);
    createPage({
      path: `/products/${node.mongodb_id}`,
      component: path.resolve("./src/templates/Product.js"),
      context: node,
    });
  });
};
