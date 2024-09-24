import express from 'express';
import { createUser, deleteUser, getOneUser, getUser, updateUser } from '../controllers/userController.js';
const userRoute = express.Router();

userRoute.post('/createUser', createUser);
userRoute.put('/updateUser/:id', updateUser);
userRoute.delete('/deleteUser/:id', deleteUser);
userRoute.get('/getUser', getUser);
userRoute.get('/getOneUser/:id', getOneUser);

export default userRoute;