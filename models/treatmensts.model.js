const mongoose = require("mongoose");
const TreatmentsSchema = new mongoose.Schema({
  Text: String,
  Date: String,
});

module.exports = mongoose.model("TreatmentsModel", TreatmentsSchema);
