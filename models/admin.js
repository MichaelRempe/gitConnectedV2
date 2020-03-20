const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: true
    }
})

const Admin = mongoose.model("Job", adminSchema);

module.exports = Admin
