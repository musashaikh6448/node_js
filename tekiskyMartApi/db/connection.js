import mongoose from 'mongoose';

const dbconnect = async (dbUrl, dbName) => {
    try {
        await mongoose.connect(dbUrl+dbName)
            console.log("Connected to the database successfully!");
    } catch (error) {
        console.log('Error while connecting to the db' ,   error); 
    }
};

export default dbconnect;
  