
const fs= require("fs/promises")

// let data= 'hi shaikh '
// let p= fs.writeFile('text.txt',data)
// p.then((data)=>{
//     console.log('the create succesful');
// })
// .catch((err)=>{
//     console.log(err);
// })

// fs.appendFile('text.txt','whatsup')
// .then((data)=>{
//     console.log('the append succesful');
// })
// .catch((err)=>{
//     console.log('some issue in append');
// })

// fs.readFile('text.txt','utf8')
// .then((data)=>{
//     console.log(`the data is: ${data}`);
// })
// .catch((err)=>{
//     console.log('some errror in file reading');
// })

fs.unlink('text.txt')
.then((data)=>{
    console.log('file delete ');
})
.catch((err)=>{
    console.log(`the error is ${err}`);
})