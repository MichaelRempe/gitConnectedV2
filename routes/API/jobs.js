const router = require("express").Router();
const jobControl = require("../../controllers/jobController"); //CRUD Operations

//matches "api/position" path
router.route("/")
    .get(jobControl.findAll)
    .post(jobControl.create);

//matches "api/job/:id" path
router.route("/:id")
    .get(jobControl.findById)
    .put(jobControl.update)
    .delete(jobControl.delete);

module.exports=router;