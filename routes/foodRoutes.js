const express = require("express");
const router = express.Router();

const db = require("../db");

const multer = require("multer");

// Storage

const storage = multer.diskStorage({

destination: function(req,file,cb){

cb(null,"uploads/");

},

filename: function(req,file,cb){

cb(null,Date.now()+"-"+file.originalname);

}

});

const upload = multer({storage:storage});


// VIEW ALL

router.get("/",(req,res)=>{

db.query("SELECT * FROM foods",(err,result)=>{

if(err) return res.json(err);

res.json(result);

});

});


// VIEW ONE

router.get("/:id",(req,res)=>{

db.query("SELECT * FROM foods WHERE foodid=?",

[req.params.id],

(err,result)=>{

if(err) return res.json(err);

res.json(result);

});

});


// ADD FOOD

router.post("/",

upload.single("image"),

(req,res)=>{

const {

foodname,

category,

price,

description,

available

}=req.body;

const image=req.file ? req.file.filename : "";

const sql=

"INSERT INTO foods(foodname,category,price,description,available,image) VALUES(?,?,?,?,?,?)";

db.query(

sql,

[

foodname,

category,

price,

description,

available,

image

],

(err,result)=>{

if(err) return res.json(err);

res.json({

message:"Food Added Successfully"

});

});

});


// UPDATE FOOD

router.put("/:id",(req,res)=>{

const {

foodname,

category,

price,

description,

available

}=req.body;

const sql=

"UPDATE foods SET foodname=?,category=?,price=?,description=?,available=? WHERE foodid=?";

db.query(

sql,

[

foodname,

category,

price,

description,

available,

req.params.id

],

(err,result)=>{

if(err) return res.json(err);

res.json({

message:"Food Updated"

});

});

});


// DELETE

router.delete("/:id",(req,res)=>{

db.query(

"DELETE FROM foods WHERE foodid=?",

[req.params.id],

(err,result)=>{

if(err) return res.json(err);

res.json({

message:"Deleted"

});

});

});

module.exports=router;