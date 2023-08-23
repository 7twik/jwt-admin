const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    access1:{
        type:Boolean,
        default:false
    },
    access2:{
        type:Boolean,
        default:false
    },
    access3:{
        type:Boolean,
        default:false
    },
});


module.exports = mongoose.model("user", userSchema);

