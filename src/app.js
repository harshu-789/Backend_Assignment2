import express from "express"
import userRoutes from "./routes/userRoutes.js"
// import cors from "cors"
import dotenv from "dotenv";



dotenv.config();
const app = express()
app.use(express.json());
// app.use(cors());
app.use((req,res,next)=>{
    console.log("method:",req.method);
    console.log("url",req.url);
    console.log("code",req.statusCode);
    next()
})
app.use('/', userRoutes);
export default app;