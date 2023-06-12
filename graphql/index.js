const { sliderQuery } = require("./slider-resolvers");
const { addQuery } = require("./advertisement-resolvers");
const { productQuery } = require("./product-resolvers");

const resolvers = {
  Query: {
    ...sliderQuery,
    ...addQuery,
    ...productQuery,
  },
};

module.exports = resolvers;
