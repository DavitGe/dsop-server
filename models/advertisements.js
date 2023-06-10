const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  type: String,
  text: String,
  buttonText: String,
  linkTo: String,
  img: String,
});

advertisementSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

module.exports = mongoose.model("advertisements", advertisementSchema);
