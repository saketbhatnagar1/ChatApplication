import mongoose from "mongoose";

const connect = async ()=>{
 
 
 try{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`connected to mongodb ${conn.connection.host}`)
 }
 catch(err) {
    console.log(`MONGO DB ERROR OCCURED ${err}`)
 }
  
    
}

export default connect

 