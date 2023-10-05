const mongoose = require('mongoose');
require("dotenv").config();

const connect = mongoose.connect("mongodb://0.0.0.0:27017/test");

//const connect = mongoose.connect(process.env.mongourl)
module.exports = {
    connect
}



//mongodb://0.0.0.0:27017/test