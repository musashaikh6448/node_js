//Q18)write a program to find your name is present in given file or not
 
const fs=require('fs')

// fs.writeFileSync('name.txt','shaikh')

fs.readFile('name.txt','utf8',(err,data)=>{
    if (data == 'shaikh') {
    console.log(` exist in file `);
    } else {
        console.log('not found');
    }
})


