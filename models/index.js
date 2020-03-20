//Exporting module giving access to ALL mongoose models
module.exports = {
  Developer : require("./developer"),
  Employer  : require("./employer"),
  Job  : require("./job")
};
