const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Viagem19@cluster0.2aqxbpg.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db;
