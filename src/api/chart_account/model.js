const model = require("../../../config/mongo").chart_account;

async function create(data) {
    const state = new model(data)
    try {
        const result = await state.save();
        console.log("success")
        return result
    } catch (error) {
        console.log(error.message); 
        return {errors : error.message,message:error.message}
    }
    
}
async function update(data,id){
    const state = await model.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
async function getAll(){
    const pageNumber = 2;
    const pageSize = 10000;
    const data = await model.find()
    .limit(pageSize)
    .sort()
    .select();
    return data;
}
async function remove(id){
    const state = await model.findByIdAndDelete(id);
    return state;
}

async function getById(id){
    const state = await model.findById(id);
    return state;
}

module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};
