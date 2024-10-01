import userModel from "../model/userModel.js"
const userModel = require('../model/userModel.js')


export let getprofileser=async(email)=>{
    try {
        let user=await userModel.findOne({email})
        return user
    } catch (error) {
        console.log(error);
    }
}





export let getdbpassword=async(email)=>{
    try {
        let user=await userModel.findOne({email})
        return user.password
    } catch (error) {
        console.log(error);
    }
}




export let registerUserSer=async(user)=>{
    try {
        console.log(user);
        let  u1=new userModel(user)
        let user1=await u1.save()
        console.log(user1);
        return "success"
    } catch (error) {
        console.log(`error occured while creating user ${error}`);
        return "error"
    }
}


module.exports =
{
    getprofileser,
    getdbpassword,
    registerUserSer

}