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

const jobSeed = [
  {
    title: "Jr. Front End Developer",
    position: "Front End",
    empType: "Full-Time",
    salary: 65000,
    applicants: [],
    company: "",
    description:
      "Required Technologies include: JavaScript/jQuery, CSS/Bootstrap, HTML/HandleBars.js"
  },
  {
    title: "Jr. Back End Developer",
    position: "Back End",
    empType: "Full-Time",
    salary: 65000,
    applicants: [],
    company: "",
    description:
      "Required Technologies include: JavaScript, Node.js, Express.js, "
  },
  {
    title: "Jr. Full Stack Developer",
    position: "Full Stack",
    empType: "Full-Time",
    salary: 75000,
    applicants: [],
    company: "",
    description:
      "Seeking a qualified MERN developer familiar with all aspects of web development"
  },
  {
    title: "Web Developer Internship",
    position: "Front End",
    empType: "Part Time",
    salary: 0,
    applicants: [],
    company: "",
    description:
      "Seeking motivated individual looking to learn more about the IT industry"
  },
  {
    title: "Software Test Engineer",
    position: "Front End",
    empType: "Contract",
    salary: 15000,
    applicants: [],
    company: "",
    description:
      "Seeking a problem solver with familiarity in debugging and detail oriented note taking"
  },
  {
    title: " Sr. Full Stack Developer",
    position: "Full Stack",
    empType: "Full-Time",
    salary: 85000,
    applicants: [],
    company: "",
    description:
      "Seeking skilled MEAN developer with extensive knowledge in the MEAN stack (Mongo, Express, Angular and Node.js"
  },
  {
    title: "Sr. Software Engineer",
    position: "Back End",
    empType: "Full-Time",
    salary: 90000,
    applicants: [],
    company: "",
    description:
      "Seeking qualified Java engineer capable of utilizing Swing and AWS."
  },
  {
    title: "Associate Front End Developer",
    position: "Back End",
    empType: "Part-Time",
    salary: 40000,
    applicants: [],
    company: "",
    description:
      "Qualified candidates should have a flexible schedule and be willing to work remotely, contributing to numerous projects requiring skills in: React.js, BootStrap/CSS and more."
  },
  {
    title: "Associate Back End Developer",
    position: "Back End",
    empType: "Part-Time",
    salary: 40000,
    applicants: [],
    company: "",
    description:
      "Qualified candidates should have a flexible schedule and be willing to work remotely, contributing to numerous projects requiring skills in: Mongoose.js, Node.js, JavaScript/Jquery and more."
  },
  {
    title: "Sr. Front End Developer",
    position: "Front End",
    empType: "Full-Time",
    salary: 115000,
    applicants: [],
    company: "",
    description:
      "Developer will undergo portfolio screening for best practice algorithms to keep client browsers running as efficiently as possible."
  },
  {
    title: "Sr. Systems Engineer",
    position: "Back End",
    empType: "Full-Time",
    salary: 125000,
    applicants: [],
    company: "",
    description:
      "Candidates should be familiar in routing and establishing web servers for the best practices for heavily trafficked web pages with secured data"
  },
  {
    title: "Sr. Full Stack Developer (Node/React.js)",
    position: "Full Stack",
    empType: "Full-Time",
    salary: 130000,
    applicants: [],
    company: "",
    description:
      "Qualified candidates will have multiple proven years of experience in the MERN stack and undergo screening on capability in various technologies, including but not limited to: MongoDB/Mongoose, NoSQL secure practices, Node.js + NPM, React.js, AWS and more. "
  }
];

const companySeed = [
  {
    userName: "southface_admin",
    password: "012345",
    companyName: "The SouthFace Clothing Company",
    email: "southface@southface.com",
    phone: "1-800-555-6666",
    location: "West Coast",
    about: "We're better than NorthFace!",
    posted: "Job"
  },
  {
    userName: "soni_admin",
    password: "567890",
    companyName: "Soni",
    email: "soni@soni.com",
    phone: "1-800-555-1234",
    location: "East Coast",
    about: "More affordable than Sony",
    posted: "Job"
  },
  {
    userName: "snapbook_admin",
    password: "111111",
    companyName: "SnapFace",
    email: "snapbook@snapbook.com",
    phone: "1-800-333-4444",
    location: "West Coast",
    about: "Snapchat + Facebook! We're best of both worlds!",
    posted: "Job"
  },
  {
    userName: "ambassader_admin",
    password: "999999",
    companyName: "Ambassader",
    email: "ambassader@ambassader.com",
    phone: "1-800-999-8576",
    location: "Mid-West",
    about: "Tech giant based in Detroit, Michigan.",
    posted: "Job"
  },
  {
    userName: "sizzle_admin",
    password: "abcde1",
    companyName: "Sizzle",
    email: "sizzle@sizzle.com",
    phone: "1-800-555-2222",
    location: "Mid-West",
    about: "We're the hottest thing to come out of Minnesota!",
    posted: "Job"
  }
];

const developerSeed = [
  {
    userName: "aaa",
    password: "123",
    firstName: "Anna",
    lastName: "Turner",
    emailAddress: "anna.turner@mail.com",
    devType: "fullStack",
    empType: "fullTime",
    languages: "python",
    location: "Mid-West",
    profile: "I write code"
  },
  {
    userName: "bbb",
    password: "456",
    firstName: "Joe",
    lastName: "Alestra",
    emailAddress: "jalestra@mail.com",
    devType: "fullStack",
    empType: "fullTime",
    languages: "python",
    location: "Mid-West",
    profile: "I write code"
  },
  {
    userName: "ccc",
    password: "789",
    firstName: "Barry",
    lastName: "Man",
    emailAddress: "bman@mail.com",
    devType: "fullStack",
    empType: "fullTime",
    languages: "python",
    location: "Mid-West",
    profile: "I write code"
  },
  {
    userName: "ddd",
    password: "111",
    firstName: "Amanda",
    lastName: "Hugginkiss",
    emailAddress: "Amanda.Hugginkiss@mail.com",
    devType: "fullStack",
    empType: "fullTime",
    languages: "python",
    location: "Mid-West",
    profile: "I write code"
  },
  {
    userName: "eee",
    password: "222",
    firstName: "Richard",
    lastName: "Banger",
    emailAddress: "Richard.Banger@mail.com",
    devType: "frontEnd",
    empType: "fullTime",
    languages: "javascript",
    location: "Mid-West",
    profile: "I write code"
  },
  {
    userName: "fff",
    password: "343",
    firstName: "Emilio",
    lastName: "Esteves",
    emailAddress: "Emelio.Emelio@mail.com",
    devType: "fullStack",
    empType: "fullTime",
    languages: "python",
    location: "Mid-West",
    profile: "I write code"
  }
];

db.Job.deleteMany({})
  .then(() => db.Job.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data);
  });

db.Employer.deleteMany({})
  .then(() => {
    db.Employer.collection.insertMany(companySeed);
  })
  .then(data => {
    console.log(data);
  });

db.Developer.deleteMany({})
  .then(() => db.Developer.collection.insertMany(developerSeed))
  .then(data => {
    console.log(data);
  });
