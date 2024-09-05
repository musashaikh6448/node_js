    //Q19)create 5 files and add data into them and copy content of all file into one file 


    const fs=require('fs')

    fs.writeFileSync('index1.txt','hii it is 1st file')
    fs.writeFileSync('index2.txt','hii it is 2nd file')
    fs.writeFileSync('index3.txt','hii it is 3rd file')
    fs.writeFileSync('index4.txt','hii it is 4th file')
    fs.writeFileSync('index5.txt','hii it is 5th file')
    

   

 let data1=fs.readFileSync('index1.txt','utf8')
 let data2=fs.readFileSync('index2.txt','utf8')
 let data3=fs.readFileSync('index3.txt','utf8')
 let data4=fs.readFileSync('index4.txt','utf8')
 let data5=fs.readFileSync('index5.txt','utf8')


 fs.appendFileSync("main.txt", ` ${data1}`);
fs.appendFileSync("main.txt", ` ${data2}`);
fs.appendFileSync("main.txt", ` ${data3}`);
fs.appendFileSync("main.txt", ` ${data4}`);
fs.appendFileSync("main.txt", ` ${data5}`)