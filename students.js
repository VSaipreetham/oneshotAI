const express=require("express");
const router=express.Router();
const StudentSchema=require("./models/studentschema");


router.post("/",async (req,res)=>{
        const students=new StudentSchema({
            id:req.body.id,
            name:req.body.name,
            yearofBatch:req.body.yearofBatch,
            collegeId:req.body.collegeId,
            skills:req.body.skills,
        });

        try{
            const studentsList=await students.save();
            res.json(studentsList);
            console.log("Inserted Success");
        }
        catch(err){
            res.send(err);
        }

});

// router.get('/',async (req,res)=>{
//     res.send(req.body);
// });


module.exports=router;