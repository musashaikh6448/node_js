import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import dbconnect from './db/jwtconnection.js'
import userRoute from './routes/jwtRoute.js'

dotenv.config()

const app = express();
let port = process.env.PORT;
let dbUrl = process.env.DBURL;
let dbName = process.env.DBNAME;

dbconnect(dbUrl, dbName);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use('/user',userRoute)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
