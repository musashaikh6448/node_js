import {join} from 'path'
const tekiskyHome = (req,res)=>{
    res.sendFile(join(process.cwd(),'views', 'home.html'))
}
const tekiskyAbout = (req,res)=>{
    res.sendFile(join(process.cwd(),'views', 'about.html'))
}
const tekiskyService = (req,res)=>{
    res.sendFile(join(process.cwd(),'views', 'service.html'))
}
const tekiskyRegister = (req,res)=>{
    res.sendFile(join(process.cwd(),'views', 'register.html'))
}

const tekiskyRegisterPost = (req,res)=>{
    res.sendFile(join(process.cwd(),'views', 'registered.html'))
    console.log(req.body) ; 
    const {name,email,mobile,address} = req.body
    console.log(`the name is ${name}`);
    console.log(`the email is ${email}`);
    console.log(`the mobile no is ${mobile}`);
    console.log(`the address is ${address}`);

}



export{ tekiskyHome,tekiskyAbout,tekiskyService,tekiskyRegister,tekiskyRegisterPost}