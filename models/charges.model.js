const mongoose = require("mongoose");
const ChargesSchema = new mongoose.Schema({
  OId:String,
  Name: String,
  UnitPrice: Number,
});

module.exports = mongoose.model("ChargesModel", ChargesSchema);
