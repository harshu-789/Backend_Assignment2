import mongoose from "mongoose"
import 'dotenv/config'



const connectDB = async ()=>{

    try {
        const connectionIns = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionIns.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED", error);
        process.exit(1);
    }
}
export default connectDB;