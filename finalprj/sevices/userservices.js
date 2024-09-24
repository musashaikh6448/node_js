import userModel from "../models/userModel.js";

export let createUserService=async(user)=>{
   try {
    let u1=new userModel(user)
    let data=await u1.save()
    console.log(data);
    return "success"
   } catch (error) {
    console.log("error while creating user");
    return 'error'
   }

}

export let getUser=async(email)=>{
    try {
        let data =await userModel.findOne({email:email})
        return data
    } catch (error) {
        return 'error'
    }
}

