//Q16)write a program to perform CURD operations on file using async await key word

let fs = require("fs/promises");

let fun1 = async () => {
  await fs.writeFile("file.html", "hello shaikh");
  console.log("file create succes");
};
fun1();

//-------------------------------------------//

let fun2 = async () => {
    await fs.appendFile("file.html", "-how are you");
    console.log("updated");
  };
  fun2();

  
  //--------------------------------------//

  let fun3 = async () => {
   let data= await fs.readFile("file.html", "utf8");
    console.log(data);
  };
  fun3();
  //-------------------------------------------//

  let fun4 = async () => {
    await fs.unlink("file.html");
    console.log("deleted");
  };
  fun4();