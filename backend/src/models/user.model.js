import mongoose from "mongoose";
import { type } from "os";

const  userSchema = new mongoose.Schema(
    {
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    profilePic:{
        type:String,//link to the picture
        required:false,
        default:"",
    },
},
    {timestamps:true}
);    
const User = mongoose.model("User",userSchema);

export default User 