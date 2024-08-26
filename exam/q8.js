//Q8)write a node js program for finding free memory of your machine and convert it to GB


const os = require("os");


const total=os.freemem()
 console.log(`${os.freemem/1024/1024/1024}`);
 