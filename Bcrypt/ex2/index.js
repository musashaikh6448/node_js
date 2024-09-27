// import bcrypt, { hash } from 'bcrypt'


// let originalpassword= 'shaikh@869'

// let hashpassword=async(originalpassword)=>{
//     let encryptpass= await bcrypt.hash(originalpassword,12)
//     console.log(encryptpass);
// }

// // hashpassword(originalpassword)

// let hashp='$2b$12$1Mz/uGu9VZ1wu6PGjz6Jw.vtsqTbC5bkP3a8rvyOFoQ/3EKeT8cki'
// let verify=async(originalpassword,hashp)=>{
//     let status = await bcrypt.compare(originalpassword,hashp)
//     console.log(status);
// }

// verify(originalpassword,hashp)



//******************************************  JWT TOKEN  *************************************************** */

import jwt from 'jsonwebtoken'

let secretkey = 'tekisky'
// let token = jwt.sign({ name: 'shaikh' }, secretkey)
// console.log(token);

let t1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhaWtoIiwiaWF0IjoxNzI3NDMzNzI1fQ.S7lys56u7BOTY7mlwN6vTz7h6C9CnryONnPsPFHbSG8'
let decode=jwt.verify(t1,secretkey)
console.log(decode);