import express from "express"
let userRoute=express.Router()
import { createuser,getprofile,getAlluser} from "../controller/userController.js"




userRoute.post('/createuser',createuser)
userRoute.get('/profile/:email',getprofile)
userRoute.get('/alluser',getAlluser)



export default userRoute

