const router = require("express").Router();
// const validator = require("./schema");
const mongooseHandler = require("./model");

router.get("/ext",async(req,res)=>{
    
    res.status(201).send({message:"Save"}); 
            
});

router.get("/",async(req,res)=>{
    const data = await mongooseHandler.getAll();
    res.status(201).send({chart_account:data}); 
});

router.put("/",(req,res)=>{
    
});

router.delete("/",(req,res)=>{
    
});

module.exports = router