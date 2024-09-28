import express from 'express'
import { registeruser,login ,getProfile} from '../controllers/userController.js'


let userRoute=express.Router()

userRoute.post("/register", registeruser) 
userRoute.post("/login", login) 
userRoute.post("/profile", getProfile) 

export default userRoute