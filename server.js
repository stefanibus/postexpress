const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const usersRoutes = require("./routes/usersRoutes");

const app = express();
const port = 3000;

app.use("/users", usersRoutes);
// app.use('/orders', ordersRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
