const Advetisement = require("../models/advertisements");

const resolvers = {
  addQuery: {
    advertisements: async () => {
      console.log("adds");
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
