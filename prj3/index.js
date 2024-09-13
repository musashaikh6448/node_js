import express from "express";
import { join } from "path";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

// app.get("/student/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   res.send(` student  name is  ${id}`);
// });

// app.get("/product/:category/:id", (req, res) => {
//     const category = req.params.category;
//     console.log(category);
//     const id = req.params.id;
//     console.log(id);

//     res.send(`Hello your category is  ${category} and your id is ${id}`);
//   });

//   app.get("/product/order/:year/and/:month", (req, res) => {
//     const year = req.params.year;
//     console.log(year);
//     const month = req.params.month;
//     console.log(month);

//     res.send(` year is  ${year}  month is ${month}`);
//   });

// app.get('/train/:from-:to',(req,res)=>{
//     const from = req.params.from;
//     console.log(from);
//     const to = req.params.to;
//     console.log(to);
//     res.send(`you are going from ${from} to ${to}`)
// })

// app.get('/location/:state.:city',(req,res)=>{
//     const state = req.params.state;
//     console.log(state);
//     const city = req.params.city;
//     console.log(city);
//     res.send(`you are in ${state} ${city}`)
// })

// app.get('/product',(req,res)=>{
//     console.log(req.query);
//     let ctg = req.query.category
//     // res.send(`we are sending list of ${ctg}`)
//     res.json(req.query)
// })

//**************   views ******** */

//for parsing incoming request day
//create application /x-www-form-uriencoded parser
app.use(bodyParser.urlencoded({extended: false}))

// for parsing
//app.use(bodyparser.json)
//or use express parser
app.use(express.json())

app.get('/register',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','register.html'))
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send('data received')
})
















app.listen(port, () => console.log(`Example app listening on port ${port}!`));






//process.cwd()  find the node path

