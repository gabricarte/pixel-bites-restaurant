//deal with every route 

const Food = require("../models/foodModel");

exports.getAllFood = async (req, res) => {
  const food = await Food.find();
  res.send(food);
};

exports.createFood = async (req, res) => {
  const food = new Food(req.body);
  await food.save();
  res.send(food);
};

exports.deleteFood = async (req, res) => {
  const food = await Food.findByIdAndDelete(req.params.id);
  res.send(food);
};