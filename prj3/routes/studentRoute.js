import express from "express";
import {
  deleteStudent,
  getStudent,
  patchStudent,
  postStudent,
  putStudent,
} from "../controller/studentController.js";

const studentRoute = express.Router();

studentRoute.get("/getStudent", getStudent);
studentRoute.post("/postStudent", postStudent);
studentRoute.put("/putStudent", putStudent);
studentRoute.patch("/patchStudent", patchStudent);
studentRoute.delete("/delteStudent", deleteStudent);

export default studentRoute;
