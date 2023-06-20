const Product = require("../models/products");

const resolvers = {
  productQuery: {
    products: async (_, args) => {
      if (args.limit) {
        const start = args.offset;
        const end = args.limit;
        return await Product.find(null, null, { skip: start, limit: end });
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
    getProductById: async (_, { id }) => {
      try {
        return await Product.find({ _id: id });
      } catch (e) {
        console.log("e", e);
        throw e;
      }
    },
  },
};

module.exports = resolvers;
