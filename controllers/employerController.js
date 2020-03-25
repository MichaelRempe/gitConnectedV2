//Controls CRUD operations to EMPLOYER collection in mongo DB
const db = require("../models");

module.exports = {
    //query DB for ALL employers
    findAll: function(req, res){
        db.Employer
        .find()
        .then(collection => res.json(collection))
        .catch(err => res.status(422).json(err));
    },
    // query DB for SPECIFIC employer by ID (passed in via request body)
    findById: function(req, res){
        db.Employer
        .findOne({firebase_id:req.params.id})
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // create NEW employer, object data passed in through request body
    create: function(req, res){
        db.Employer
        .create(req.body)
        .then(document => res.json(document))
        .catch(err => res.status(422).json(err));
    },
    // update SPECIFIC employer via id and update data in request body
    // postedJob: function(req, res){
    //     // console.log(req.body)
    //     db.Employer
    //     // .findByIdAndUpdate({_id: req.params.id}, {$push: {posted: req.body}})
    //     .findByIdAndUpdate({_id:req.params.id}, {$push: {posted:req.body}}, {new:true})
    //     .then(updatedDoc => res.json(updatedDoc))
    //     .catch(err => res.status(422).json(err))
    // },
    update: function(req, res){
        db.Employer
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(updatedDoc => res.json(updatedDoc))
        .catch(err => res.status(422).json(err))
    },
    // delete SPECIFIC employer via id and removes data in db
    delete: function(req, res){
        db.Employer
        .findByIdAndDelete({_id: req.params.id})
        .then(deletedDoc => res.json(deletedDoc))
        .catch(err => res.status(422).json(err))
    }
};
