const mongoose = require("mongoose");
 

const formSchema = new mongoose.Schema({
    name:String,
    email:String,
    summary:String
});

module.exports = mongoose.model("forms",formSchema);