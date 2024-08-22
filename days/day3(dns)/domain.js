// let dns = require("dns");
// const w3 = dns.lookup('www.w3schools.com', function (err, addresses, family) {
//   console.log(addresses);
// });

// // let dns=require('dns')
// let fb = dns.lookup('www.facebook.com', function(err,addresses,family) {
//     console.log(addresses);
// })

// dns.lookup('www.google.com ', (err, addresses, family) => {
//   console.log(err);
//   console.log(`the ip addrese is${addresses}`);
//   console.log(`the family is ${family}`);
// });



// let dns=require('dns');

// dns.lookup('www.tekisky.com',(error,addres,family)=>{
// console.log(error);
// console.log(`this domain name ip adress is == ${addres}`);
// console.log(`this ip adress family is ip V ${family}`);

// })


// let display=(msg)=>{
//     console.log(msg);
// }

let add=(x,y,test)=>{
    let result=x+y
    test(result)
}

// add(10,30,display)


add(20,30,(msg)=>{
    console.log(msg);
    // console.log('morning');
})

