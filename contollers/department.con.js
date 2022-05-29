const DepartmentModel = require("../models/department.model");
exports.depCreate = async (req, res, next) => {
  try {
    const newdep = new DepartmentModel({
      Name: req.body.Name,
      Description: req.body.Description,
    });
    await newdep.save();
    res.status(200).json(newdep);
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
exports.depFindall = async (req, res, next) => {
  try {
    DepartmentModel.find()
    .sort({'Name':1})
    .limit(20)
    .exec(function (err, departments) {
      if (err)
        return res
          .status(500)
          .json({ message: "Your patients do not exits", error: err });
      res.status(200).json(departments);
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
exports.depFindone = async (req, res, next) => {
  try {
    DepartmentModel.find({Name:req.body.Name})
    
    .exec(function (err, departments) {
      if (err)
        return res
          .status(500)
          .json({ message: "Your patients do not exits", error: err });
      res.status(200).json(departments);
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
exports.depUpdate = async (req, res, next) => {};
exports.depDelete = async (req, res, next) => {};
