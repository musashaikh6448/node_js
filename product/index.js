import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
const app=express()
dotenv.config()
let port=process.env.PORT


app.use(bodyParser.urlencoded({extended:false}))//for from data
app.use(express.json()) 
// app.use('/products',productRoute)

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})
