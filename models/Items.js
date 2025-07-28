const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});


module.exports = mongoose.model("Item", itemSchema, "products");
