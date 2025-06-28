import mongoose from "mongoose";
import { type } from "os";

const  messageSchema = new mongoose.Schema(
    {
    senderId:{//sender
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",//reference to user model
        required:true
    },
    receiverId:{//receiver
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    text:{
        type:String,
        },
    image:{
        type:String,//link to the picture
    },
},
    {timestamps:true}
);    
const Message = mongoose.model("Message",messageSchema);

export default Message