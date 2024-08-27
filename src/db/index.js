import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`)
        console.log(`mongodb is connected succusefully and hence proved I know every thing....${connectionInstant.connection.host}`)
    } catch (error) {
        console.log("mongodb error found :::", error)
        process.exit(1)
    }
}


export default connectDB