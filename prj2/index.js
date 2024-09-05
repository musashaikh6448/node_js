// //syntax:- app.method(path,callback)
// //ex:-
// import express from 'express'

// const app= express()
// const port=process.env.PORT ||'4000'

// app.listen(port,()=>{
//     console.log(`server listening at http://localhost:${port}`);
// })

// app.get('/',function(req,res){
//     res.send('hello world')
// })
// app.post('/',function(req,res){
//     res.send('hello world')
// })
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
// app.post('/',(req,res)=>{
//     res.send('hello world')
// })

// ////////////////////////////////////////

// //syntax:- app.method(path,callback)
// //ex:-

// app.get('/student/all',(req,res)=>{
//     res.send('all student')
// })

// app.post('/student/create',(req,res)=>{
//     res.send('new student created')
// })

// app.put('/student/update',callback)
// app.delte('/student/delte',callback)
// //////////////////////////////////////

// app.all('sabkuch',function(req,res,next){
//     console.log('accessing the secret section');
//     next(); //pass controlto the next callback
// })

// app.all('*',requireAuthentication,loadUser)
// app.all('/api/*',requireAuthentication)

// ///////////// path/////////
// //www.geekyshows.com/data/$book
// app.get('/data/([/$])book'.callback)

// //////////////// callback /////
//  app.get('/cbexmaple1',(req,res)=>{   //req-the request object
//     res.send('callback example')   //res-the response object
//  })                              //next-it is indicating the next middleware function
   
//  app.get('/cbexmaple2',(req,res,next)=>{  
//     console.log('first callback');
//     next(); //pass control to the next callback
//  },(req,res)=>{
//     res.send('more than one callback example')   
//  })                                


//  ////////////// array of cb //////

//  const cb1=(req,res,next)=>{
//     console.log('first callback');
//     next();
//  }

//  const cb2=(req,res,next)=>{
//     console.log('second callback');
//     next();
//  }

//  const cb3=(req,res,next)=>{
//  res.send('an array of callback')}
//  app.get('/cbexmaple3',[cb1,cb2,cb3])


//************************************************* */

//routing
// const express from 'express'
import express from 'express'
const app= express()
const port= process.env.PORT || '4000'

//routes
// app.get('/',function (req,res) {
//     res.send('get method')
// })

app.get('/', (req,res)=> {
    res.send('get method')
})
app.post('/', (req,res)=> {
    res.send('get method')
})
app.patch('/', (req,res)=> {
    res.send('get method')
})




app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
})
