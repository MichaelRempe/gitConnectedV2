const router = require("express").Router();
const developerControl = require("../../controllers/developerController"); //CRUD Operations

//matches "/api/developer"
router.route("/")
    .get(developerControl.findAll)
    .post(developerControl.create);

//matches "api/developer/:id" path
router.route("/:id")
    .get(developerControl.findById)
    .put(developerControl.update)
    .delete(developerControl.delete);

module.exports=router;