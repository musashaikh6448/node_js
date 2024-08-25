//Q14)write a program to perform CURD operations on file using callbacks

const fs=require('fs')


fs.writeFile('test.html','welcome',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file created')
    }
})

//--------------------------------------------//

fs.appendFile('test.html', 'shaikh musa', (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(` file update`);
    }
 })

 //--------------------------------------------//

 fs.readFile('test.html',(err,data)=>{
    if (err) {
        console.log(`err the file reading ${err}`);
    } else {
        console.log(`in file is ${data}`);
    }
 })

 //--------------------------------------------//


 fs.unlink('test.html',(err)=>{
    if (err) {
        console.log(`error${err}`);
    } else {
        console.log(`file delete succesful`);
    }
 })
