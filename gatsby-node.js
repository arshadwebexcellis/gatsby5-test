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
      allMongodbSalvexCustomerCategorylists {
        edges {
          node {
            auctions
            category_id
            description
            subCategories {
              category_id
              ct
              description
              owner_id
            }
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

  products.forEach(({ node }, i) => {
    console.log(`/products/${node.mongodb_id}--`, i);
    createPage({
      path: `/products/${node.mongodb_id}`,
      component: path.resolve("./src/templates/Product.js"),
      context: node,
    });
  });

  // Create category pages
  const categories =
    productData.data.allMongodbSalvexCustomerCategorylists.edges;
  createPage({
    path: `/categories/`,
    component: path.resolve("./src/templates/Category.js"),
    context: { categories },
  });
};
