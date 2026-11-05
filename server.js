const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


// ADD THIS LINE
app.use("/uploads", express.static("uploads"));

const foodRoutes=require("./routes/foodRoutes");

app.use("/foods",foodRoutes);

app.listen(3000,()=>{
    console.log("Server Running...");
});

app.use("/uploads", express.static("uploads"));

const PORT = 3000;
const db=require("./db");

app.post("/login",(req,res)=>{

const {username,password}=req.body;

db.query(

"SELECT * FROM admin WHERE username=? AND password=?",

[username,password],

(err,result)=>{

if(err) return res.json(err);

if(result.length>0){

res.json({success:true});

}

else{

res.json({success:false});

}

});

});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});