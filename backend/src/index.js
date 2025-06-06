import  express  from 'express'; 
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.routes.js"
import connect from "./lib/db.js"
import cookieParser from "cookie-parser"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    console.log(`server running on PORT No. ${PORT}`)
    connect();
    //console.log("MONGO NOT RUNNING OK ")
})