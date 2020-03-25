//Controls CRUD operations to DEVELOPER collection in mongo DB
const db = require("../models");

module.exports = {
    //query DB for ALL devs
    findAll: function(req, res){
        db.Developer
        .find()
        .then(collection => res.json(collection))
        .catch(err => res.status(422).json(err));
    },
    // query DB for SPECIFIC dev by ID (passed in via request body)
    findById: function(req, res){
        db.Developer
        .findOne({firebase_id:req.params.id})
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // create NEW dev, object data passed in through request body
    create: function(req, res){
        console.log(req.body);
        db.Developer
        .create(req.body)
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // update SPECIFIC dev via id and update data in request body
    update: function(req, res){
        db.Developer
        .findByIdAndUpdate({_id: req.params.id}, {$push: {appliedTo: req.body}})
        .then(updatedDoc => res.json(updatedDoc))
        .catch(err => res.status(422).json(err))
    },
    // delete SPECIFIC dev via id and removes data in db
    delete: function(req, res){
        db.Developer
        .findByIdAndDelete({_id: req.params.id})
        .then(deletedDoc => res.json(deletedDoc))
        .catch(err => res.status(422).json(err))
    }
};

