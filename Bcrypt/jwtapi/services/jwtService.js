import userModel from "../model/jwtModel.js"

export let userModelServices = async(a)=>{
    try {


        let user = await userModel(a);
        user.save()
        
        console.log("user created successfully");
        return user
    } catch (error) {
        console.log("some error generated");
    
    }}
