var mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;


var bicycleSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        minlength:2
    },
    description:{
        type: String,
        required: true,
        minlength:2,
        maxlength: 200
    },
    price:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true, 
    },
    _user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {timestamps:true});

var Bicycle = mongoose.model("Bicycle", bicycleSchema);