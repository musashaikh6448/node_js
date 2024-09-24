import mongoose from 'mongoose'

let dbConnect=async(dbURL,dbName)=>{
    try {
        await mongoose.connect(dbURL+dbName)
        console.log('connected to DB sucessfully');
    } catch (error) {
        console.log('error occured while connect to db');
        
    }
}

export default dbConnect

