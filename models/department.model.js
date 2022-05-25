const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  
});

module.exports = mongoose.model("DepartmentModel", DepartmentSchema);
