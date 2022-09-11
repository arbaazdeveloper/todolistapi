const mongoose=require('mongoose')

const db=mongoose.connect('mongodb+srv://arbaaz:arbaazdatabase123@cluster0.ukfau.mongodb.net/formdata?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log('error'+err)
})
module.exports=db