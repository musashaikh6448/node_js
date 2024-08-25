//Q13)write a program to perform CURD operations on file using sync method

const fs=require('fs')


fs.writeFileSync('test.html','hi my name is')

//----------------------------------//

fs.appendFileSync('test.html' ,'shaikh musa')

//------------------------------//

let data=fs.readFileSync('test.html','utf8')
console.log(data);

//--------------------------------//


fs.unlinkSync('test.html')