const { sliderQuery } = require("./slider-resolvers");

const resolvers = {
  Query: {
    ...sliderQuery,
  },
};

module.exports = resolvers;
