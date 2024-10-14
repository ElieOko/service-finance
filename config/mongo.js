const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/service_finance").then(()=>{
    console.log("CONNECTED");
})
.catch(error=>{
    console.log("NO connected");
});

const schema_account = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
    Balance:{type:String,default:0},
    isSubAccount:{type:Boolean,default:false},
    parentId :{type:Number},
    date_created:{
        type : Date,
    }
});
const schema_type_classe = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})
const schema_chart_account = new mongoose.Schema({
    numero_compte : {type:String, unique:true},
    libelle : {type:String},
    nature : {type:String},
    // type_classe :{
    //     type:mongoose.Types.ObjectId(),
    //     ref : "type_classe"
    // }
})

const account = mongoose.model("Account",schema_account);
const chart_account = mongoose.model("ChartAccount",schema_chart_account);
const type_classe = mongoose.model("TypeClasse",schema_type_classe)
module.exports ={
    mongoose,
    account,
    chart_account,
    type_classe
}