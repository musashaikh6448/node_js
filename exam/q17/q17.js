//Q17)write a program to copy content of one file to another

const fs=require('fs')

fs.writeFileSync('index.txt','hiii how are you')

fs.copyFileSync('index.txt','demo.html')