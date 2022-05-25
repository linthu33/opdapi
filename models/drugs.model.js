const mongoose = require("mongoose");
const {Schema}=mongoose;
const DrugSchema = new Schema({
  Date: String,
  DrugName: String,
  Quantity:String,
  Strength:String,
  Group:String,
  Forms:String,
  UnitPrice:Number,
  TotalPrice:Number
});

module.exports = mongoose.model('DrugModel', DrugSchema);
