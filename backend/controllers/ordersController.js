//Controller defined what to do in every route 
const Order = require("../models/ordersModel");

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send(order);
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send(order);
};