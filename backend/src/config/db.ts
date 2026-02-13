import mongoose from "mongoose";
import { log } from "node:console";

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("db connected");
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDb;