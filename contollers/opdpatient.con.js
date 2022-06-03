const StaffRoleModel = require("../models/staffrole.model");
const patientsModel = require("../models/opdpatients.model");
const PersonModel = require("../models/opdpersons.model");
const DrugModel = require("../models/drugs.model");
const DiagnosisModel = require("../models/diagnosis.model");
const TreatmentModel = require("../models/treatmensts.model");
const ChargesModel = require("../models/charges.model");
exports.opd_patient_create = async (req, res, next) => {
  //console.log("Req data for patient", req.body.FirstName);
  try {
    const newPerson = await new PersonModel({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Relation: req.body.Relation,
      address: req.body.Address,
      EmailAddress: req.body.EmailAddress,
      NRC: "kyat",
      Gender: req.body.Gender,
      BloodType: req.body.BloodType,
      DateOfBirth: req.body.DateOfBirth,
      Status: req.body.Status,
      Photo: req.body.Photo,
      RegisteredDate: req.body.RegisteredDate,
      ShortBiography: req.body.ShortBiography,
      QRCode: req.body.QRCode,
    });

    //newPerson.address=arraypush(req.body.Address)
    console.log("address after puh", newPerson.address);
    await newPerson.save();
    //console.log("Req data for person", newPerson);
    if (newPerson) {
      console.log("test ",req.body.patient.Age)
      var newpatient = new patientsModel({
        Age: req.body.patient.Age,
        RegisterDate: req.body.patient.RegisterDate,
        PatientType: req.body.patient.PatientType,
        //Service: "company",
        OPTCase: req.body.patient.OPTCase,
        Tempature: req.body.patient.Tempature,
        Weight: req.body.patient.Weight,
        Height: req.body.patient.Height,
        UpperBloodPressure: req.body.patient.UpperBloodPressure,
        LowerBloodPressure: req.body.patient.LowerBloodPressure,
        PulseRate: req.body.patient.PulseRate,
        //StaffPermit: "staffkyaw",
        loginuser: "kyaw",
        hospital: req.body.patient.Hospital,
        Department: req.body.patient.Department,
        //ReferInfor: "1234",
        PatientStatus: req.body.patient.patientStatus,
        Complaint: "good health",
        Surgical: "dasd",
        Examination: "asd",
        Investigation: "asasd",
        DrugFee: 500,
        DiagnosisFee: 5000,
        ChargeFee: 5000,
        Tax: 100,
        GrandTotal: 2000,

        PersonId: newPerson._id,
      });

      //console.log("Req data for patient", newpatient);
      await newpatient.save();
      await updatepatientId(newPerson._id,newpatient._id);
      await createStaffRoles(newpatient._id, req.body.patient.StaffRoles);
      await createDrugs(newpatient._id, req.body.patient.Drugs);
      await createDiagnosis(newpatient._id, req.body.patient.Diagnosis);
      await createTreatments(newpatient._id, req.body.patient.Treatments);
      await createCharges(newpatient._id, req.body.patient.Charges);
      res.json(newpatient);
    } else {
      res.json({
        success: true,
        message: "Patient account  is unsucessfully",
        //exituser: exituser,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "error insert",
    });
  }
};
exports.opd_patient_findALL = async (req, res, next) => {
  patientsModel
    .find()
    .populate("PId")
    .populate("Drugs")
    .populate("Diagnosis")
    .populate("Treatments")
    .populate("Charges")
    .exec(function (err, patients) {
      if (err)
        return res
          .status(500)
          .json({ message: "Your patients do not exits", error: err });
      res.status(200).json({
        message: "this patient  is ",
        patients: patients,
      });
    });
};
exports.opd_patient_findOne = async (req, res, next) => {
  patientsModel
    .findOne({
      OPTCase: "dental",
    })
    .populate("PId")
    .populate("Drugs")
    .populate("Diagnosis")
    .populate("Treatments")
    .populate("Charges")
    .exec(function (err, patients) {
      if (err){
        console.log('logad',err)
        return res
        .status(500)
        .json({ message: "Your patients do not exits", error: err });
      }
        
      res.status(200).json({
        message: "this patient  is ",
        patients: patients,
      });
    });
};
/* exports.opdperson_update = (req, res, next) => {};
exports.opdperson_delete = (req, res, next) => {}; */
//route တစ်ခုထဲမှာ res နှစ်ခု ဖြစ်နေရင် cannot set header error တက်ပါတယ်။

//#region  StaffRoles , Drugs , Diagnosises , Treatmensts mCharges
function arraypush(arr) {
  let arrdata = [];
  //console.log("address list",arr)
  for (list of arr) {
    arrdata.push(list);
  }
  //console.log("console ", list);
  return arrdata;
}
const updatepatientId = async function (personId,patientId) {
 return await PersonModel.findByIdAndUpdate(
   personId,
   { $set: { patientId: patientId } },
   { new: true }
 )
};

const createStaffRoles = async function (patientId, staff) {
  return await StaffRoleModel.create(staff).then((docstaff) => {
    return patientsModel.findByIdAndUpdate(
      patientId,
      { $set: { StaffRoles: docstaff } },
      { new: true }
    );
  });
};
const createDrugs = async function (patientId, drugs) {
  return await DrugModel.create(drugs).then((docdrug) => {
    return patientsModel.findByIdAndUpdate(
      patientId,
      { $set: { Drugs: docdrug } },
      { new: true }
    );
  });
};
const createDiagnosis = async function (patientId, diagnosis) {
  return await DiagnosisModel.create(diagnosis).then((data) => {
    return patientsModel.findByIdAndUpdate(
      patientId,
      { $set: { Diagnosis:  data  } },
      { new: true }
    );
  });
};
const createTreatments = async function (patientId, treaments) {
  return await TreatmentModel.create(treaments).then((data) => {
    return patientsModel.findByIdAndUpdate(
      patientId,
      { $set: { Treatments: data  } },
      { new: true }
    );
  });
};
const createCharges = async function (patientId, charges) {
  return await ChargesModel.create(charges).then((data) => {
    return patientsModel.findByIdAndUpdate(
      patientId,
      { $set: { Charges:  data } },
      { new: true }
    );
  });
};
//#endregion
