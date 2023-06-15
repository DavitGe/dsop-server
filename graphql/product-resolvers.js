const Product = require("../models/products");

const resolvers = {
  productQuery: {
    products: async (_, { from }) => {
      try {
        console.log("from", from);

        return await Product.find();
      } catch (e) {
        console.log(e);
        throw e;
        aa;
      }
    },
    featuredProducts: async () => {
      try {
        return await Product.find({ featured: true });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};

module.exports = resolvers;
