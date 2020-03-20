const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  position: {
    type: String,
    trim: true,
    required: true,
    // enum: ["Front End Developer", "Back End Developer", "Full Stack Developer"]
  },
  empType:{
    type: String,
    trim: true,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: "Developer" }],
  company: { type: Schema.Types.ObjectId, ref: "Employer" },
  description: {
    type: String,
    trim: true,
    required: true,
    default: "Gainful opportunity with the chance for growth"
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
