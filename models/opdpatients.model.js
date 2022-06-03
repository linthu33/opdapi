const mongoose = require("mongoose");
const { Schema } = mongoose;
const PatientSchema = new Schema({
  Age: { type: Number, default: 0 },
  RegisterDate: { type: Date, default: Date.now },
  PatientType: String,
  //Service: String,
  OPTCase: String,
  Tempature: Number,
  Weight: Number,
  Height: String,
  UpperBloodPressure: Number,
  LowerBloodPressure: Number,
  PulseRate: Number,
 // StaffPermit: String,
  StaffRoles: [
    {
      type: Schema.Types.ObjectId,
      ref: "StaffRoleModel",
    },
  ],
  loginuser: String,
  hospital: String,
  Department: String,
  ReferInfor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ReferInfoModel",
  }, //single object
  patientStatus: String,
  //Complaint: String,
  Surgical: String,
  Examination: String,
  Investigation: String,
  Drugs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DrugModel",
    },
  ], //list object
  Diagnosis: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiagnosisModel",
    },
  ],
  Treatments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TreatmentsModel",
    },
  ],
  Charges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChargesModel",
    },
  ],
  DrugFee: Number,
  DiagnosisFee: Number,
  ChargeFee: Number,
  Tax: Number,
  GrandTotal: Number,
  OId:String,
  PId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonModel",
  },
}); // 33 field
module.exports = mongoose.model("PatientModel", PatientSchema);
