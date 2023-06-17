const Product = require("../models/products");

const resolvers = {
  productQuery: {
    // products: async (_, { from }) => {
    //   try {
    //     console.log("from", from);

    //     return await Product.find(_, _, { skip: from, limit: 3 });
    //   } catch (e) {
    //     console.log(e);
    //     throw e;
    //   }
    // },
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
  },
};

module.exports = resolvers;
