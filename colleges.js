const express=require("express");
const router=express.Router();
const collegeschema=require("./models/collegeschema");


router.post("/",async (req,res)=>{
    try{
            const colleges=new collegeschema({
            id:req.body.id,
            name:req.body.name,
            yearFound:req.body.yearFound,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            noofStud:req.body.noofStud,
            courses:req.body.courses,
        });
        //console.log(req.body);
            const collegesList=await colleges.save();
            res.json(collegesList);
            console.log("Inserted into colleges data sucess");

        }
        catch(err){
            res.send(err);
        }

});

// router.get('/',async (req,res)=>{
//     res.json(req.body);
// });


module.exports=router;