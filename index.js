const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
// Configuring the database

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//const url = process.env.MONGO_URL || "mongodb://mongodb:27017/HisOPDDB";//for docker
const url = process.env.MONGO_URL || "mongodb://localhost:27017/ClinicalDB";
//process.env.MONGODB_URI
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the OPD database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
//app.use('/uploads', express.static('uploads'));

// Have Node serve the files for our built React app
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OPD Service" });
});
require("./routes/routes")(app);
// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Clinical service app listening on port ${PORT}!`);
});
