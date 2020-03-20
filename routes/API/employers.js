const router = require("express").Router();
const employerControl = require("../../controllers/employerController"); //CRUD operations

//matches "api/employer" path
router.route("/")
    .get(employerControl.findAll)
    .post(employerControl.create);

//matches "api/employer/:id" path
router.route("/:id")
    .get(employerControl.findById)
    .put(employerControl.update)
    .delete(employerControl.delete);

module.exports=router;