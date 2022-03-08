import mongoose from "mongoose"
import model from "../schema/schema.js"
class studentApi{

    static createData =async(req,res)=>{
        try{
        const {name,age}=req.body
        const data = new model({
            name:name,
            age:age
        })
        await data.save()
        res.send("data send")
      }
      catch(error){
          console.log(error)
      }
    }

    static readData = async(req,res)=>{
        try{
        const result =  await model.find()
        res.send(result)
        }
        catch(error){
            console.log(error)
        }
    }

    static updateData = async (req,res)=>{
        try{
        const {name,age}=req.body
        const b ={
            name:name,
            age:age
        }
        const update = await model.findByIdAndUpdate(req.params.id,b)
        res.send("updatedata")
        }
        catch(error){
            console.log(error)
        }
    }

    static deleteData = async (req,res)=>{
        try{
        const del = await model.findByIdAndDelete(req.params.id)
        res.send("deletedata")
        }
        catch(error){
            console.log(error)
        }
    }
}

export default studentApi