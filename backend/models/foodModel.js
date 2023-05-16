//schema for food

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  imagePath: String,
}, { versionKey: false });

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;