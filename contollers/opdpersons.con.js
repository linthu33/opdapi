const personModel = require("../models/opdpersons.model");

exports.opdperson_findOne = (req, res, next) => {
    personModel
    .findOne({FirstName:"ludo"})
    .populate({
      path: "patientId",
      populate: [
        {
          path: "Drugs",
          model: "DrugModel",
        },
        {
          path: "Diagnosis",
          model: "DiagnosisModel",
        },
        {
          path: "Treatments",
          model: "TreatmentsModel",
        },
        {
          path: "Charges",
          model: "ChargesModel",
        },
      ],
    })

    .exec(function (err, persons) {
      if (err)
        return res
          .status(500)
          .json({ message: "Your patients do not exits", error: err });
      res.status(200).json(persons);
    });
};
exports.opdperson_UserfindAll = (req, res, next) => {};
exports.opdperson_findAll = (req, res, next) => {
  personModel
    .find()
    .populate({
      path: "patientId",
      populate: [
        {
          path: "Drugs",
          model: "DrugModel",
        },
        {
          path: "Diagnosis",
          model: "DiagnosisModel",
        },
        {
          path: "Treatments",
          model: "TreatmentsModel",
        },
        {
          path: "Charges",
          model: "ChargesModel",
        },
      ],
    })

    .exec(function (err, persons) {
      if (err)
        return res
          .status(500)
          .json({ message: "Your patients do not exits", error: err });
      res.status(200).json(persons);
    });
};
exports.opdperson_update = (req, res, next) => {};
exports.opdperson_delete = (req, res, next) => {};
