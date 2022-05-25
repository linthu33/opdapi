const mongoose = require("mongoose");
const { Schema } = mongoose;
const StaffRoleSchema = new Schema({
  RoleName: String,
});

module.exports = mongoose.model("StaffRoleModel", StaffRoleSchema);
