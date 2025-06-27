import express, { Router } from "express"
import { signup,login,logout,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js";
const router = express.Router();

////////////////AUTHENTICATION||||||||||||||||||||||||||||||||||||||||||

/*---------------------------GET--------------------------------*/
router.get('/logout',logout);
/*---------------------------POST--------------------------------*/
router.post('/signup',signup);
router.post('/login',login);
//////////////////Authentication END||||||||||||||||||||||||||||||||||||
router.put("/update-profile",protectRoute,updateProfile);//added protectroute middleware to check if they are logged in /authenticated,check for session or cookies 


router.get("/check",protectRoute,checkAuth)

export default router;
