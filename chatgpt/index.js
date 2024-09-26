import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from './routes/productsRoute.js';
import dbconnect from './db/connection.js';

dotenv.config();

const app = express();
let port = process.env.PORT;
let dbUrl = process.env.DBURL;
let dbName = process.env.DBNAME;

// Database connection
dbconnect(dbUrl, dbName);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/products", productRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
