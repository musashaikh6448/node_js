var fs = require("fs");

// fs.appendFile("demo.js","hello",(err)=>{
//     console.log(err);
// })

// fs.appendFileSync("demo.js", "console.log('hello world');");    create
// fs.writeFileSync("demo.js", "console.log('hello world'wwww);");   changes
// fs.unlinkSync("demo.js")  delete

fs.readFile("demo.txt","utf-8",(err,data)=>{
console.log(data);
console.log(err);
})
