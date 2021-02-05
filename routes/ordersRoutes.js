const express = require("express");
const router = express.Router();

const ordersControllers = require("../controllers/ordersController");

// route with dynamic parameters in the Route
router.get("/:id", ordersControllers.getById);
// fallback route
router.get("/", ordersControllers.getAll);

module.exports = router;
