const mongoose = require('mongoose');
mongoose.set('debug', true)
mongoose.connect("mongodb+srv://root:admin@cluster0.ypavj.mongodb.net/natours?authSource=admin&replicaSet=atlas-df44qh-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
mongoose.Promise = Promise

module.exports.Users = require('./data.js')