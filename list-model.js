const mongoose=require('mongoose')

const listSchema=mongoose.Schema({
    todo:{type:String}
})
const todo=mongoose.model('todo',listSchema)

module.exports=todo