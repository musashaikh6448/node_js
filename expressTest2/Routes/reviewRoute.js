import express from "express";
import {
  createReview,
  deleteReview,
  getReview,
  updateReview,
} from "../controllers/reviewController.js";
const reviewRoute = express.Router();

reviewRoute.post("/createReview", createReview);
reviewRoute.get("/getReview", getReview);
reviewRoute.put("/updateReview/:id", updateReview);
reviewRoute.delete("/deleteReview/:id", deleteReview);

export default reviewRoute;
