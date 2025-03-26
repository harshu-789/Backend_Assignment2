import 'dotenv/config'
import connectDB from "./db/index.js"
import app from './app.js'
const port = process.env.PORT  || 5000
connectDB()
.then(()=>{

    app.listen( port , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection Failed" ,err)
})