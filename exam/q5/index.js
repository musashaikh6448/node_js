// 5 //
//  - Move the logic for the `/students`, `/teachers`, and `/products` routes into separate files inside a `controllers` folder. Import and use these controllers in your main `routes` files.


import express from "express";
import studentRoute from "./routes/studentRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
import productRoute from "./routes/productRoute.js";
const app = express();
const port = 2000;

app.use("/student", studentRoute );
app.use('/teacher', teacherRoute )

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});


