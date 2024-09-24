import { createUserService, getUser } from "../sevices/userservices.js";

export let createuser = async(req,res)=>{
    let userDetails=req.body
    console.log(userDetails);

    try {
        let status=await createUserService(userDetails)
        if (status=='success') {
            res.send('user created successfully').status(201)
        } else {
            res.send('error user created successfully').status(400)
        }
    } catch (error) {
        res.send('error occurred ').status(500)
    }
} 

export let getprofile = async(req,res)=>{
    let email=req.params.email
    console.log(email);
try {
    let user=await getUser(email)
    res.send(`${user}`).status(201)
} catch (error) {
    res.send('user profile').status(500)
}
   
}

export let getAlluser = (req,res)=>{
    res.send('user list')
}

