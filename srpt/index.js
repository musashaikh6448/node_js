import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbconnect from "./db/connection.js";
import productRoute from "./routes/productRoute.js";
let app = express();
dotenv.config();
let port = process.env.PORT;
let dbUrl = process.env.DBURL;
let dbName = process.env.DBNAME;
dbconnect(dbUrl, dbName);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/product", productRoute);

app.listen(port, () => {
  console.log(`server started at port number ${port}`);
});
