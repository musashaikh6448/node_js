import express from "express";
import fs from "fs";
let app = express();

app.get("/filecreated", (req, res) => {
  fs.writeFileSync("filecreated.txt", "hi my name is shaikh");
  res.send("file created");
});

app.get("/updatefile", (req, res) => {
  fs.appendFile("filecreated.txt", " hi updated", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file updated");
    }
  });
  res.send("file updated sucs");
});

app.get("/readfile", (req, res) => {
  fs.readFile("filecreated.txt", "utf8", (err, data) => {
    let data1 = data.toString();
    if (err) {
      console.log(err);
    } else {
      console.log(`file read${data1}`);
    }
    res.send(`${data1}`);
  });
});

app.get("/deltefile", (req, res) => {
  fs.unlink("filecreated.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
  res.send("file deleted");
});

let port = 5000;
app.listen(port, () => {
  console.log(`the server started ${port}`);
});
