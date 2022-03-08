import mongoose from "mongoose";

const studentData = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true}
})

const model = new mongoose.model('userData',studentData)



export default model