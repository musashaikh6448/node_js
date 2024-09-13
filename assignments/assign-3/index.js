import express from "express";
import tekiskyRoutes from "./routes/tekiskyRoutes.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.json())
const port = 4000;

app.use("/tekisky", tekiskyRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))