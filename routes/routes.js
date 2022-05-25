const opd_person_controller = require("../contollers/opdpersons.con");
const opd_patient_controller = require("../contollers/opdpatient.con");

module.exports = (app) => {
  //#region For User route
  app.get("/opdpatientfindone", opd_patient_controller.opd_patient_findOne);
  app.get("/opdpatientfindall", opd_patient_controller.opd_patient_findALL);
  app.post("/opdpatientcreate", opd_patient_controller.opd_patient_create);
  //#endregion
};
