import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { generateToken } from "../lib/utils.js"
import { profile } from "console"


export const signup = async (req,res)=>{
    const {email,fullName,password} = req.body
    try {
        //hash the password password => 234jhkg#ghkjhdsklhasdbljnmdlsa;dk
        const data = "Please fill all the fields"
        if (!email || !fullName || !password)
        {
            return res.status(400).json({
                    message:data
            })
        }
        
        if (password.length<6)
        {
            return res.status(400).json({
                message:"Password must be atleast 6 charachters long "
            })
        }
             
        const user = await User.findOne({email})
       if (user) {
        return res.status(400).json({
            message:"Email already exists"
        })
       }
       

       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password,salt)

       const newUser = new User({
        email:email,
        fullName:fullName,
        password:hashedPassword
       })

       if (newUser)
       {
        //generate token
        generateToken(newUser._id,res)
        await newUser.save();
        res.status(201).json({
            _id:newUser.id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic
        })
       }else{
        res.status(400).json({
            message:"Error in creating a new user"
        })
       }
       
       
        //validate the email (Optional)
        //create and instance on the db
        

        
    }
     catch (error)
    {
        return res.status(400).json({
            message:(error.json())

    })
}
}


export const login =async  (req,res)=>
{
    //user will send email and password match the email and hashed password

    const {email,password} = req.body

    try {
        //check if user email exists or not 
        
        const user = await User.findOne({email})
        console.log(user.password)
        if (!user){
            res.status(401).json({
                message:"Invalid Credentials"
            })
        }

        const isPassCorrect = await bcrypt.compare(password,user.password)
        console.log(user.password,password)
        if(!isPassCorrect)
        {
            console.log("Invalid credentials")
            res.status(401).json({
                message:"Invalid Credentials"
            })
        }
        
        const user_token = generateToken(user._id,res)
         res.status(200).json({
            _id:user.id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
            message:"Logged in successfully"
        })

    } catch (error) {
         res.status(500).json({
            message:error
        })
        console.log(error)
    }
    
}


export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out"})
    } catch (error) {
        console.log(error)
    }
}


export const updateProfile = async (req,res)=>{
    
    try {
        console.log("UPDATE-PROFILE-UNDER-DEVELOPMENT")
        const {profilePic} = req.body
        const userId = req.user._id;
        if (!profilePic) 
            {return res.status(400).json({
                message:"Profile Pic Required"
            })
            
            }       
        if (profilePic)
        {

        }
        
    } catch (error) {
        
    }
}