import{ userModelServices} from '../services/jwtService.js'
import {hashpassword} from '../encruption/encrypt.js'



export let createuser=async(req,res)=>{
let { name,email,mobileno,password}=req.body



    let user = await userModelServices(userdata)
    console.log(userdata)
    res.send(userdata)
}


