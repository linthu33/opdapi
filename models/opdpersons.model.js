const mongoose = require("mongoose");
const AddressDatamodel = require('../models/opdaddress.model').schema;
const PersonSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Relation: String,
  EmailAddress: String,
  NRC: String,
  Gender: String,
  BloodType: String,
  DateOfBirth: { type: Date, default: Date.now },
  Status: String,
  Photo: [String],
  RegisteredDate: { type: Date, default: Date.now },
  ShortBiography: String,
  QRCode: String,
  address:  [AddressDatamodel]
});
PersonSchema.virtual("FullName").get(function () {
  return `${this.FirstName + this.LastName}`;
});
module.exports = mongoose.model("PersonModel", PersonSchema);
