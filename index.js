const express = require('express')
const db = require('./db')
const app = express()
require('dotenv').config()
const port = process.env.PORT||5000
const cors=require('cors')
const todo=require('./list-model')

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.post('/todo',async (req,res)=>{
    
   const t1=new todo(req.body)
   const response=await t1.save()
   res.json(response)
})
app.get('/', async(req, res) =>{
    const response=await todo.find()
    res.json(response)
})


app.listen(port, () => console.log(`app listening on port ${port}!`))