const router = require("express").Router();
const developerRoutes = require("./developers");
const employerRoutes = require("./employers");
const jobRoutes = require("./jobs");

// Book routes
router.use("/developer", developerRoutes);
router.use("/employer", employerRoutes);
router.use("/job", jobRoutes);


module.exports = router;
