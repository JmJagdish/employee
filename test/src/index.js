const express = require('express');
const employee = require("./controller/employeeController.js");
var cors = require('cors');

const app = express();

app.use(cors())


app.use(express.json());

app.use("/post", employee);

app.use("/get", employee);

module.exports = app;