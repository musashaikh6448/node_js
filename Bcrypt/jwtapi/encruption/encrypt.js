import bcrypt from 'bcrypt'



let hashpassword=async(originalpassword)=>{
    let encryptpass= await bcrypt.hash(originalpassword,10)
    console.log(encryptpass);
    return encryptpass
}



export {hashpassword}