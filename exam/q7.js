//Q7)write a node js program for finding total memory of your machine and convert it to MB



const os = require("os");


const total=os.totalmem()
 console.log(`${os.totalmem/1024/1024}`);
