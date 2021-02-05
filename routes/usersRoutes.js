const express = require("express");

const usersController = require("../controllers/usersController");
const ordersController = require("../controllers/ordersController");

const router = express.Router();

router.get("/:id", usersController.getById);

router.get("/", usersController.getAll);

router.post("/", usersController.create);

router.put("/:id", usersController.updateById);

router.delete(
	"/:id",
	ordersController.deleteByUserId,
	usersController.deleteById
);

module.exports = router;
