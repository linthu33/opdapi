const mongoose = require("mongoose");
const ReferInfoSchema = new mongoose.Schema({
    HospitalName: String,
    SaMaNumber: String,
    DoctoreName: String,
    Decription: String,
    Case: String,
    ReferDate: Date,
    StaffRoles: String,
    ContactInformation: String,
    

});

module.exports = mongoose.model("ReferInfoModel", ReferInfoSchema);
