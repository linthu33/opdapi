const opd_person_controller = require("../contollers/opdpersons.con");
const opd_patient_controller = require("../contollers/opdpatient.con");
const dep_con = require("../contollers/department.con");
(verifyToken = require("../middleware/authJWT")),
  ({ signup, signin } = require("../contollers/auth.controller"));

module.exports = (app) => {
  //#region For User route
  app.post("/register", signup, function (req, res) {});

  app.post("/login", signin, function (req, res) {});
  app.get("/hiddencontent", verifyToken, function (req, res) {
    if (!user) {
      res.status(403).send({
        message: "Invalid JWT token",
      });
    }
    if (req.user == "admin") {
      res.status(200).send({
        message: "Congratulations! but there is no hidden content",
      });
    } else {
      res.status(403).send({
        message: "Unauthorised access",
      });
    }
  });
  //#endregion
  app.get("/opdpatientfindone", opd_patient_controller.opd_patient_findOne);
  app.get("/opdpatientfindall", opd_patient_controller.opd_patient_findALL);
  app.post("/opdpatientcreate", opd_patient_controller.opd_patient_create);
  //person all data
  app.get("/opdpersonfindall", opd_person_controller.opdperson_findAll);
  app.get("/opdpersonfindone", opd_person_controller.opdperson_findOne);
  //department
  app.get("/depfindall", dep_con.depFindall);
  app.get("/depfindone", dep_con.depFindone);
  app.post("/depcreate", dep_con.depCreate);
};
