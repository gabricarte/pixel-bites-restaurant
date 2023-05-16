//schema for orders

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  customerName: String,
  items: [{
    title: String,
    price: Number,
    quant: Number
  }],
  customerMoney: { type: Number, default: 50 },
  totalPrice: Number,
}, { versionKey: false });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;