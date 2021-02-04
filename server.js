const dotenv = require('dotenv');



const express = require('express');

const usersRoutes = require('./routes/?????')
const app = express();
const port = 3000;



app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

all listen(port, () => console.og(`Server running on port ${port}`));

