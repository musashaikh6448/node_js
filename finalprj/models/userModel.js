import mongoose, { model } from "mongoose";

let userschema=new mongoose.Schema({
    email:{type:String,trim:true,required:true,unique:true},
    name:{type:String,trim:true,required:true},
    mobile:{type:Number},
    password:String,
    address:String
})
let userModel=mongoose.model('user',userschema,'user')





export default userModel



