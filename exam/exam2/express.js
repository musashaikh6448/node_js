
// 1 //
// Create a new Express.js project and set up a basic server that listens on port 3000. When visiting the root route (`/`), display "Welcome to Express!" using `res.send`.


import express from "express";
const app = express();
const port = 3000;

// app.get("/", (req, res) =>{
//     res.send("welcome to express")});




// 2 //
//- Create a GET route `/students` that returns a list of student names as plain text. Use `res.send` to display the names.

// app.get("/student", (req, res) =>{
//     res.send("musa, azhar, shebaz, azim")});


// 3 //
//   - Create a GET route `/teachers` that returns a list of teacher names as plain text. Use `res.send` to display the names.

// app.get("/teacher", (req, res) =>{
//     res.send('junaid sir,suleman sir')})


// 4 //
//  - Create a GET route `/products` that returns a list of product names as plain text. Use `res.send` to display the names.

// app.get('/product',(req,res)=>{
//     res.send('apple, lenovo , dell, hp')
// })



// 9 //
//  Create a route `/create-student-file` that uses the `fs` module to create a file named `students.txt` and writes the list of student names into the file. Display a message "File created successfully!" using `res.send`.

import fs from 'fs'
// app.get('/create-student-file', (req,res)=>{
//     res.send(fs.writeFileSync('students.txt', 'musa, azhar, shebaz, azim'))
// })

// 10 //
// - Create a route `/read-student-file` that reads the content of `students.txt` and displays it using `res.send`.


let data= fs.readFileSync('student.txt')
app.get(`/read-student-file`,(req,res)=>{
    res.send('data read sucessfully')
    console.log(data, 'utf8');fdxzz
})























    app.listen(port, () => console.log(`Example app listening on port ${port}!`));