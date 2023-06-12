const Product = require("../models/products");

const resolvers = {
  productQuery: {
    products: async () => {
      try {
        return await Product.find({});
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};

module.exports = resolvers;
