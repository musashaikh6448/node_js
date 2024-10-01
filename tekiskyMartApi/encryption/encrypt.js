import bcrypt from "bcrypt"
const salt = 10
export let hashPassword=async(plainPass)=>{
    try {
        let passwordhash= await bcrypt.hash(plainPass,salt)
        return passwordhash
    } catch (error) {
        console.log(`error while incryption${error}`);
    }
}

export let comparepass = async(hp,dbp)=>{
    try {
        let  compare = await bcrypt.compare(hp,dbp)
        
        return compare

    } catch (error) {
        console.log(` error while comparing in encryption`);
        
        
    }
}