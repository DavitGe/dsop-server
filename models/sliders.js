const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  buttonText: String,
  to: String,
});

sliderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

module.exports = mongoose.model("sliders", sliderSchema);
