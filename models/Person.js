const mongoose = require("mongoose");

const Person = new mongoose.Schema(
  {
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    cp: {
      type: String,
      required: true,
    },
    trestbps: {
      type: String,
      required: true,
    },
  },
  { collection: "pa" }
);

module.exports = mongoose.model("Person", Person);
