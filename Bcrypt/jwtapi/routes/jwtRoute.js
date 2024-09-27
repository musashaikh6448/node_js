import express from 'express';
import { createuser } from '../controller/jwtController.js';

const userRoute = express.Router();


userRoute.post('/createuser', createuser);


export default userRoute;
