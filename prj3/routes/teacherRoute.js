import express from "express";
import {
  getTeacher,
  postTeacher,
  putTeacher,
  patchTeacher,
  deleteTeacher,
} from "../controller/teacherController.js";


const teacherRoute = express.Router()

teacherRoute.get('/getTeacher', getTeacher)
teacherRoute.post('/postTeacher', postTeacher)
teacherRoute.put('/putTeacher', putTeacher)
teacherRoute.patch('/patchTeacher', patchTeacher)
teacherRoute.delete('/deleteTeacher', deleteTeacher)

export default teacherRoute
