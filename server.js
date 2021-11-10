const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/route.js')
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 3000

app.use('/', userRoutes)

app.listen(port)