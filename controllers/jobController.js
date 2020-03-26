//Controls CRUD operations to POSITION collection in mongo DB
const db = require("../models");

module.exports = {
  //query DB for ALL jobs
  findAll: function(req, res) {
    db.Job.find()
      .then(collection => res.json(collection))
      .catch(err => res.status(422).json(err));
  },
  // query DB for SPECIFIC jobs by ID (passed in via request body)
  findById: function(req, res) {
    db.Job.findById(req.params.id)
      .then(document => res.json(document))
      .catch(err => res.status(422).json(err));
  },
  // create NEW job, object data passed in through request body
  create: function(req, res) {
    console.log(req.body);
    db.Job.create(req.body)
      .then(document => {
        console.log(document);
        db.Employer.findByIdAndUpdate(document.company_id, {
          $push: { posted: document._id }
        })
          .then(data => console.log(data))
          .catch(err => console.log(err));
        res.json(document);
      })
      .catch(err => res.status(422).json(err));
  },
  // update SPECIFIC job via id and update data in request body
  update: function(req, res) {
    console.log(req.body.id);
    console.log(req.params.id);
    db.Job.findByIdAndUpdate(req.params.id, {
      $push: { applicants: req.body.id }
    })
      .then(updatedDoc => {
        console.log(updatedDoc);
        db.Developer.findByIdAndUpdate(req.body.id, {
          $push: { appliedTo: req.params.id }
        })
          .then(data => console.log(data))
          .catch(err => console.log(err));
        res.json(updatedDoc);
      })
      .catch(err => res.status(422).json(err));
  },
  // delete SPECIFIC job via id and removes data in db
  delete: function(req, res) {
    db.Job.findByIdAndDelete({ _id: req.params.id })
      .then(deletedDoc => res.json(deletedDoc))
      .catch(err => res.status(422).json(err));
  }
};
