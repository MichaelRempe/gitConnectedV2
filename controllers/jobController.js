//Controls CRUD operations to POSITION collection in mongo DB
const db = require("../models");

module.exports = {
    //query DB for ALL jobs
    findAll: function(req, res){
        db.Job
        .find()
        .then(collection => res.json(collection))
        .catch(err => res.status(422).json(err));
    },
    // query DB for SPECIFIC jobs by ID (passed in via request body)
    findById: function(req, res){
        db.Job
        .findById(req.params.id)
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // create NEW job, object data passed in through request body
    create: function(req, res){
        db.Job
        .create(req.body)
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // update SPECIFIC job via id and update data in request body
    update: function(req, res){
        db.Job
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(updatedDoc => res.json(updatedDoc))
        .catch(err => res.status(422).json(err))
    },
    // delete SPECIFIC job via id and removes data in db
    delete: function(req, res){
        db.Job
        .findByIdAndDelete({_id: req.params.id})
        .then(deletedDoc => res.json(deletedDoc))
        .catch(err => res.status(422).json(err))
    }
};
