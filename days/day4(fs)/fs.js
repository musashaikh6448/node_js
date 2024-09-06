// var path = require('path');
// var filename = path.dirname('/Users/Refsnes/demo_path.js');
// var filename = path.extname('/Users/Refsnes/demo_path.js');
// console.log(filename);

let fs= require('fs')
/////// sync /////
//to write /create the file
fs.writeFileSync('test.txt',"my name is ")

//to update file
fs.appendFileSync('test.txt'," shaikh musa")

//to rading the file
let data=fs.readFileSync('test.txt')    //you can use utf8 after file name to string form
console.log(data.toString());  //tostring() will couffer uffer into string


//to delte file
fs.unlinkSync('test.txt')

/////// async //////





 fs.writeFile('test.txt','my name is ',(err)=>{
    if (err) {
        console.log(`the file cant create succesful`);
    } else {
        console.log(`the file create succesful`);
    }
 })

 fs.appendFile('test.txt', 'shaikh musa', (err)=>{
    if (err) {
        console.log(`the file cant update`);
    } else {
        console.log(`the file update`);
    }
 })


 fs.readFile('test.txt',(err,data)=>{
    if (err) {
        console.log(`err the file reading ${err}`);
    } else {
        console.log(`in file is ${data}`);
    }
 })

 fs.unlink('test.txt',(err)=>{
    if (err) {
        console.log(`error${err}`);
    } else {
        console.log(`file delete succesful`);
    }
 })




