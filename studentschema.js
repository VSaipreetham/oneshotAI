const mongoose=require("mongoose");
const express=require("express");
const StudentSchema=mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    yearofBatch:{
        type:String,
        required:true,
    },
    collegeId:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true,
    }
    
});

module.exports=mongoose.model('studentschema',StudentSchema);