import 'dotenv/config'
import connectDB from "./db/index.js"
import app from './app.js'
import dotenv from 'dotenv'


const port = process.env.PORT  || 6000
dotenv.config()
connectDB()

.then(()=>{

    app.listen( port , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection Failed" ,err)
})