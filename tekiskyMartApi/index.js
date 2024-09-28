import express from 'express'
const app= express()  //create instance of express
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
dotenv.config() //it loads env variables into process.env object
import dbconnect from './db/connection.js'

//for parsing data
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())//for parsing json data

//for connection with databsae

dbconnect(process.env.DBURL,process.env.DBNAME)
//for mapping routes

app.use("/user",userRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port http://localhost: ${process.env.PORT}`)
})   

