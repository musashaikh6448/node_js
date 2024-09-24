import express from "express";
const app = express();
import dbConnect from "./db/connection.js";

//for env variables
import dotenv from 'dotenv'
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";

//it loads env variables into process.env object
dotenv.config();
let port = process.env.PORT;
dbConnect(process.env.DBURL,process.env.DBNAME)

//parsing incoming request
app.use(bodyParser.urlencoded({extended:false}))//for from data
app.use(express.json())   //for json data
//routes mapping
app.use('/user',userRoute)

 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});



