import mongoose from "mongoose";

const connectDb = async (url)=>{
    try {
        const option = {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
        await mongoose.connect(url,option)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb