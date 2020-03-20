const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = require("./job");

const employerSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  companyName: {
    type: String,
    trim: true,
    required: true
  },
  email:{
    type: String,
    trim: true,
    required: true
  },
  phone:{
    type: String,
    trim: true,
    default: "1-800-888-8727"
  },
  location: {
    type: String,
    trim: true,
    required: true,
    // enum: ["West-Coast", "East-Coast", "Mid-West"]
  },
  about:{
    type: String,
    trim: true,
  },
  posted: [{ type: Schema.Types.ObjectId, ref: "Job" }]
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
