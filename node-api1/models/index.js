var dbConfig = require("../config/db.config");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model")(mongoose);

module.exports = db;