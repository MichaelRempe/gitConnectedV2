let mongoose = require("mongoose");
let db = require("../models");
const dbConfig = require("../db/config");

mongoose.connect(
    // (process.env.MONGODB_URI ||
    "mongodb://localhost/devNetwork_DB",
    {
      useNewUrlParser: true,
      useFindAndModify: false
      // useUnifiedTopology: true
    }
  );

  const developerAdmin = {
      text: "Log in as Developer",
      firstName: "Gary",
      lastName: "Almes",
      emailAddress: "garytalmes@gmail.com",
      devType: "Full Stack",
      empType: "Full Time",
      language: "JavaScript",
      location: "East-Coast",
      profile: "I enjoy web development and application building",
      
  }
  const employerAdmin = {
      text: "Log in as Employer",
      companyName: "Trilogy",
      email: "trilogyEducation@email.triligy.edu",
      phone: "1-800-955-8362",
      location: "East-Coast",
      about: "Serving students for years, Trilogy Educators seek to enhance the learning process"
      
  }
db.Employer.create(employerAdmin).then(data => console.log(data)).catch(err=>console.log(err));
db.Developer.create(developerAdmin).then(data => console.log(data)).catch(err=>console.log(err))