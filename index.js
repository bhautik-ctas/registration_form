import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import route from './router/route.js'
import connectDb from './dbConnect/db.js'

app.use(express.json())
app.use('/',route)
app.get('/',(req,res)=>{
    res.send({name:'raj',age:22})
})
connectDb(process.env.url)


app.listen(process.env.port,()=>{
    console.log("server is running");
})