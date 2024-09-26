import bcrypt from "bcrypt"

// let mypassword = '1234'
// let salt=10

// bcrypt.hash(mypassword,salt,(error,hash)=>{
//     try {
//         console.log(hash);
//     } catch (error) {
//         console.log(error);
//     }
// })

// const hash = "$2b$10$h4aoBxjDAH8U8fjUJ6B20.jwzALGca5QhsdRC623vFIJvSXJGTe5K"

// bcrypt.compare(mypassword,hash,(error,result)=>{
//     try {
//         console.log(result);
//     } catch (error) {
//       console.log(error);  
//     }
// })

let pass ="123"
let salt= 14
let hash = bcrypt.hashSync(pass,salt)
console.log(hash);

bcrypt.compare(pass,hash,(error,result)=>{
    try {
        console.log(result);
        } catch (error) {
            console.log(error);
            }
})