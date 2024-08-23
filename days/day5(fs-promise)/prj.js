let fs = require("fs/promises");

let fun1 = async () => {
  await fs.writeFile("file.txt", "hello shaikh");
  console.log("file create succes");
};
fun1();

// let fs=require("fs/promises")

// let fun1=async()=>{
//     await fs.writeFile("test.txt",'hello goodmorning ')
//     console.log('file is created')
// }
// fun1()
