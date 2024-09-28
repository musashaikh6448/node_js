import bcrypt from "bcrypt"

export let hashPassword=async(plainPass)=>{
    try {
        let passwordhash= await bcrypt.hash(plainPass,14)
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