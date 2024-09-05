// import express from 'express'

// const app = express()     //instence create krna
// let port=6900

// app.get('/name',(req,res)=>{
//     res.send('Hello, World!')
// })

// app.listen(port,()=>{
//     console.log(`server started at port number ${port}`);
// })




//******************************************************************* */
// import express from 'express'

// const app = express()     
// let port=6900

// app.get('/student/getstudent',(req,res)=>{
//     res.send('students detail are xyz')
// })
// app.post('/student/createstudent',(req,res)=>{
//     res.send('created student successfully')
// })

// app.put('/student/updatestudent',(req,res)=>{
//     res.send('updated student successfully')
// })

// app.patch('/student/smallupdatestudent',(req,res)=>{
//     res.send('smallupdate student successfully')
// })

// app.delete('/student/deletestudent',(req,res)=>{
//     res.send('deleted student successfully')
// })

// app.listen(port,()=>{
//     console.log(`server started at port number ${port}`);
// })

//***************************************************** */


import express from 'express'

const app = express()     
let port=6900

app.get('/teacher/getteacher',(req,res)=>{
    res.send('teacher detail are xyz')
})
app.post('/teacher/createteacher',(req,res)=>{
    res.send('created teacher successfully')
})

app.put('/teacher/updateteacher',(req,res)=>{
    res.send('updated teacher successfully')
})

app.patch('/teacher/smallupdateteacher',(req,res)=>{
    res.send('smallupdate teacher successfully')
})

app.delete('/teacher/deleteteacher',(req,res)=>{
    res.send('deleted teacher successfully')
})

app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
})