const express = require('express');
const dbConnection = require('./db/config');
const dotenv = require('dotenv')
const cors = require('cors')
const User = require("./db/User")
const app = express();
app.use(express.json());
dbConnection();
dotenv.config();
app.use(cors());


// posting data in MongoDb
app.post("/register",async(req, resp)=>{
    let user = new User(req.body)    
    let result = await user.save();
    resp.send(result)
})

// getting Data from MongoDb

app.get("/users",async(req, res)=>{
    let uData = await User.find();        
    if(uData.length>0){
        res.send(uData)
    }else{
        res.send({msg: "No record available"})
    }
})

// Get Single User Detail on the basis of ID from MongoDB
app.get("/singleuser/:id", async(req,res)=>{
    let result = await User.findOne({_id: req.params.id});  
    
    if(result){
        res.send(result)
    }else{
        res.send({msg: "No record found"})
    }
    
})

// Editing / Updating User Data on the basis of Id in MongoDB 

app.put("/users/:id",async(req,res)=>{
    let result = await User.updateOne(
        {_id: req.params.id},
        {$set: req.body}        
    )
    res.send(result)
})

// Deleting one user on the basis of ID

app.delete('/users/:id',async(req,res)=>{
    let result = await User.deleteOne({_id: req.params.id})    
    res.send(result)    
})










const PORT = process.env.port || 8000

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT} in ${process.env.App_Mod}`)
})