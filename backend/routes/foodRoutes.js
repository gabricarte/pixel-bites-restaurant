//defines what to do in every route, link with controller

const express = require("express");
const foodController = require("../controllers/foodController");

const router = express.Router();

router.get("/", foodController.getAllFood);

router.post("/", foodController.createFood);

router.delete("/:id", foodController.deleteFood);

module.exports = router;