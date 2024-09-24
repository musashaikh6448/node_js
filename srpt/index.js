// import express from "express";
// import productRoute from "./routes/productRoute.js";
// import mongoose from "mongoose";
// import dbconnect from "./db/connection.js";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// dotenv.config();
// let port = process.env.PORT;
// let dbUrl = process.env.DBURL;
// let dbName = process.env.DBNAME;
// dbconnect(dbUrl, dbName);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const app = express();
// app.use(express.json())
// app.use("/product", productRoute);

// app.listen(port, () => {
//   console.log(`server started at port number ${port}`);
// });



import express from "express";
import productRoute from "./routes/productRoute.js";
import mongoose from "mongoose";
import dbconnect from "./db/connection.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
let port = process.env.PORT;
let dbUrl = process.env.DBURL;
let dbName = process.env.DBNAME;

// Initialize 'app' first before using it
const app = express();

// Connect to the database
dbconnect(dbUrl, dbName);

// Use body-parser middleware after initializing 'app'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Express' built-in JSON parser (you can remove this if body-parser does it)
app.use(express.json());

// Use the product route
app.use("/product", productRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server started at port number ${port}`);
});
