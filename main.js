const express = require('express');
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const fs = require('fs');
const mongo = require("./config/mongo");
const chart_account = require("./src/api/chart_account/api");
const mongooseHandler = require("./src/api/chart_account/model")
const reader = require('xlsx')
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(helmet());
app.use("/api/chart/account",chart_account);

if (app.get("env")==="development") {
    app.use(morgan('tiny'));
}
const file = reader.readFile('./plan_comptable_general.xlsx')
    let data = []
    const sheets = file.SheetNames
    for(let i = 0; i < sheets.length; i++){
        const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
    }
    //console.log(data);
    // data.map((async v=>{
    //     const {NumeroCompte:numero_compte,LibelleCompte:libelle,NatureCompte:nature}=v
    //     //console.log({numero_compte,libelle,nature});
    //    await mongooseHandler.create({numero_compte,libelle,nature});
    // }))
const port = process.env.PORT || 8500;
app.listen(port,()=> {
    console.log(`Server launch ${port}...`)
});