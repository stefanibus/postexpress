const express = require("express");

const usersControllers = require("../controllers/usersController");

const router = express.Router();

router.get("/:id", usersControllers.getById);

router.get("/", usersControllers.getAll);

module.exports = router;
