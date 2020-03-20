const router = require("express").Router();
const API = require("./API"); //looks into api folder for default index.js

router.use("/api", API);

module.exports = router;
