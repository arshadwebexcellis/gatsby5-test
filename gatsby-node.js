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
            title
            endDate
            createdAt
            country
            city
            categorySlug
            categoryId
            category
            mongodb_id
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
    createPage({
      path: `/products/${node.mongodb_id}`,
      component: path.resolve("./src/templates/Product.js"),
      context: node,
    });
  });
};
