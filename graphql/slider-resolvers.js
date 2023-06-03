const Slider = require("../models/sliders.js");

const resolvers = {
  sliderQuery: {
    sliders: async () => {
      console.log("Sliders");
      try {
        return await Slider.find({});
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};

module.exports = resolvers;
