const Advetisement = require("../models/advertisements");

const resolvers = {
  addQuery: {
    advertisements: async () => {
      try {
        return await Advetisement.find({});
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};

module.exports = resolvers;
