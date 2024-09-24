import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    name : {
        type : String,
        required : [true, "name is required"]
    },
    email : {
        type : String,
        required : [true, "email is required"]
    },
    mobile : {
        type : Number,
        required : [true, "mobile is required"]
    },
    password : {
        type : String,
        required : [true, "password is required"]
    }
})

const userModel = mongoose.model("users", userScheme);
export default userModel;