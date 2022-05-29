var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "fullname not provided "],
  },
  email: {
    type: String,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid email!",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: [true, "Please specify user role"],
  },
  password: {
    type: String,
    required: true,
  },
  RegisterDate: {
    type: Date,
    default: Date.now,
  },
  staff:String,
  Department:String,
  Permition:Boolean
});

module.exports = mongoose.model("User", userSchema);
