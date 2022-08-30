const express=require("express");
const app=express();
const mongoose=require("mongoose");
const colleges=require("./colleges");
const students=require("./students");
require('dotenv/config');
const bodyparser=require('body-parser');
app.use(bodyparser.json());

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("DB Connected");
});



app.get('/',(req,res)=>{
    res.send("Application started");
});


app.use("/colleges",colleges);
app.use("/students",students);

app.listen(3000);
