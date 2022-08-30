const mongoose=require("mongoose");
const express=require("express");
const CollegeSchema=mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    yearFound:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    noofStud:{
        type:Number,
        required:true,
    },
    courses:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('collegeschema',CollegeSchema);