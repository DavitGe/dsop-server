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
  featuredProducts: async () => {
    try {
      return await Product.find({ featured: true });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

module.exports = resolvers;
