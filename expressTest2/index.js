import express from 'express';
import dotenv from 'dotenv';
import connectDb from './DB/connectDb.js'
import productRoute from './Routes/productRoute.js';
import orderRoute from './Routes/orderRoute.js';
import reviewRoute from './Routes/reviewRoute.js';
import userRoute from './Routes/userRoute.js';
dotenv.config();
connectDb();
const app = express();
app.use(express.json())

app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use('/reviews', reviewRoute);
app.use('/users', userRoute);

app.listen(process.env.PORT, () => {
    console.log(`server started at port number ${process.env.PORT}`)
})