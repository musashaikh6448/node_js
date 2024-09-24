import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    reviewNumber : {
        type : Number,
        required : [true, "review number is required"]
    },
    reviewComments : {
        type : String,
        required : [true, "review coments is required"]
    },
    stars : {
        type : Number,
        required : [true, " strat is required"]
    }
});

const reviewModel = mongoose.model("reviews", reviewSchema);
export default reviewModel;