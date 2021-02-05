const dotenv = require("dotenv");
dotenv.config();

const parser = require("body-parser");

const express = require("express");

const usersRoutes = require("./routes/usersRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
