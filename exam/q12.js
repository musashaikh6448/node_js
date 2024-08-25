//Q12)write a node js program for finding IP address of below websites and type of IP address
// www.ndtv.com
// www.tekisky.com
// www.tekiskymart.com
// www.facebook.com
// www.cricbuzz.com
// www.www.w3schools.com


let dns = require("dns");

 dns.lookup('www.ndtv.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});


 dns.lookup('www.tekisky.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});


dns.lookup('www.tekiskymart.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});

 dns.lookup('www.facebook.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});


dns.lookup('www.cricbuzz.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});

 dns.lookup('www.w3schools.com', function (err, addresses, family) {
  console.log(err);
  console.log(addresses);
  console.log(family);
});