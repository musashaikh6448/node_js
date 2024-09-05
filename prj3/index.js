import express from "express";
import studentRoute from "./routes/studentRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
const app = express();
const port = 7000;

app.use("/student", studentRoute );
app.use('/teacher', teacherRoute )

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});
