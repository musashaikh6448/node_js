//Q15)write a program to perform CURD operations on file using promise

const fs = require("fs/promises");

let data = "hi shaikh ";

fs.writeFile("text.html", data)
  .then((data) => {
    console.log("created");
  })
  .catch((err) => {
    console.log(err);
  });

  //--------------------------------------------//

fs.appendFile("text.html", "whatsup")
  .then((data) => {
    console.log("updated");
  })
  .catch((err) => {
    console.log("not updated");
  });

  //--------------------------------------------//

fs.readFile("text.html", "utf8")
  .then((data) => {
    console.log(`the data is: ${data}`);
  })
  .catch((err) => {
    console.log("some errror in file reading");
  });

  //--------------------------------------------//

fs.unlink("text.html")
  .then((data) => {
    console.log("file delete ");
  })
  .catch((err) => {
    console.log(`the error is ${err}`);
  });
