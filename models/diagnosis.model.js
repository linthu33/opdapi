const mongoose = require("mongoose");
const DiagnosisSchema = new mongoose.Schema({
  DiagnosisName: String,
  Result: String,
  Date: String,
  UnitPrice: Number,
});

module.exports = mongoose.model("DiagnosisModel", DiagnosisSchema);
