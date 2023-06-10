const { sliderQuery } = require("./slider-resolvers");
const { addQuery } = require("./advertisement-resolvers");

const resolvers = {
  Query: {
    ...sliderQuery,
    ...addQuery,
  },
};

module.exports = resolvers;
