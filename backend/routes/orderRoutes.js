//defines what to do in every route, link with controller

const express = require("express");
const orderController = require("../controllers/ordersController");

const router = express.Router();

router.get("/", orderController.getAllOrders);

router.post("/", orderController.createOrder);

router.delete("/:id", orderController.deleteOrder);

module.exports = router;