const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://atallyde02:Viagem19@cluster0.cpywe1o.mongodb.net/senacDelas");

let db = mongoose.connection;

module.exports = db;
