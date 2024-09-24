import mongoose from "mongoose";

//to establish connection with database
mongoose.connect("mongodb://0.0.0.0:27017/flipcurd");
//instance of database
const db = mongoose.connection;
//event listerner functions
db.on("open", () => {
  console.log("connected to DB successfully");
});

//user schema
let userschema = new mongoose.Schema({
  name: String,
  email: String,
  mobileno: Number,
  password: String,
  address: String,
});
//model creation of user
let usermodel = mongoose.model("user", userschema);

//product schema
let productschema = new mongoose.Schema({
  company: String,
  model: String,
  price: Number,
  discountprice: Number,
});
//model creation of product
let productmodel = mongoose.model("product", productschema);

//**************  users data  ********************** */
//(u1)
let u1 = new usermodel({
  name: "shaikh",
  email: "shaikhmusa6448@gmail.com",
  mobileno: 7822896448,
  password: "1234",
  address: "nanded",
});
u1.save();

//(u2)
let u2 = new usermodel({
  name: "noman",
  email: "shaikhnoman123@gmail.com",
  mobileno: 357767687,
  password: "3569",
  address: "nanded",
});
u2.save();

//(u3)
let u3 = new usermodel({
  name: "rafe",
  email: "shaikhrafe@gmail.com",
  mobileno: 568978349,
  password: "4398",
  address: "nanded",
});
u3.save();

//(u4)
let u4 = new usermodel({
  name: "azim",
  email: "azimkhan@gmail.com",
  mobileno: 2483794387,
  password: "0987",
  address: "nanded",
});
u4.save();

//(u5)
let u5 = new usermodel({
  name: "suleman",
  email: "sulemankhan@gmail.com",
  mobileno: 943825436,
  password: "4r783",
  address: "nanded",
});
u5.save();

//(u6)
let u6 = new usermodel({
  name: "azhar",
  email: "azharshaikh@gmail.com",
  mobileno: 9846332476,
  password: "8766",
  address: "nanded",
});
u6.save();

//(u7)
let u7 = new usermodel({
  name: "shaikh noman",
  email: "noman@gmail.com",
  mobileno: 98746235,
  password: "48937",
  address: "nanded",
});
u7.save();

//(u8)
let u8 = new usermodel({
  name: "rahman",
  email: "abdulrahman@gmail.com",
  mobileno: 4739368547,
  password: "w8r74",
  address: "nanded",
});
u8.save();

//(u9)
let u9 = new usermodel({
  name: "saqib",
  email: "shaikhsaqib@gmail.com",
  mobileno: 987956789,
  password: "78df",
  address: "nanded",
});
u9.save();

//(u10)
let u10 = new usermodel({
  name: "shebaz",
  email: "shaikhshebaz@gmail.com",
  mobileno: 9876576456,
  password: "dfjut67",
  address: "nanded",
});
u10.save();
//*******************  user data  end ********************** */

//***************** products  data ************************ */

//(p1)
let p1 = new productmodel({
  company: "Apple",
  model: "iPhone 14",
  price: 999,
  discountprice: 899,
});
p1.save();

//(p2)
let p2 = new productmodel({
  company: "Samsung",
  model: "Galaxy S23",
  price: 799,
  discountprice: 749,
});
p2.save();

//(p3)
let p3 = new productmodel({
  company: "OnePlus",
  model: "OnePlus 11",
  price: 699,
  discountprice: 659,
});
p3.save();

//(p4)
let p4 = new productmodel({
  company: "Google",
  model: "Pixel 7 Pro",
  price: 899,
  discountprice: 849,
});
p4.save();

//(p5)
let p5 = new productmodel({
  company: "Sony",
  model: "Xperia 1 V",
  price: 949,
  discountprice: 899,
});
p5.save();

//(p6)
let p6 = new productmodel({
  company: "Xiaomi",
  model: "Mi 13",
  price: 649,
  discountprice: 599,
});
p6.save();

//(p7)
let p7 = new productmodel({
  company: "Oppo",
  model: "Find X6 Pro",
  price: 729,
  discountprice: 699,
});
p7.save();

//(p8)
let p8 = new productmodel({
  company: "Huawei",
  model: "P50 Pro",
  price: 849,
  discountprice: 799,
});
p8.save();

//(p9)
let p9 = new productmodel({
  company: "Asus",
  model: "ROG Phone 7",
  price: 999,
  discountprice: 949,
});
p9.save();

//(p10)
let p10 = new productmodel({
  company: "Motorola",
  model: "Edge 40",
  price: 799,
  discountprice: 749,
});
p10.save();

//******************* product data end ****************** */


// ************  read data in terminal  ************/
let readData=async()=>{
    let data=await usermodel.find();
    console.log(data);
}
readData();

let readData1= async()=>{
    let data=await productmodel.find();
    console.log(data);
}
readData1();

//********************************* */

//**************** upadate data**************** */
let upadatedata=async()=>{
    let data=await usermodel.updateOne({name:"shaikh musa"},{address:"hydrabad"})
    console.log(data);
}
upadatedata();

let updateproduct=async()=>{
    let data=await productmodel.updateOne({company:"Asus"},{price:1099})
    console.log(data);
}
updateproduct()
//************************************** */

//**************** delete data **************** */
let deletedata=async()=>{
    let data=await usermodel.deleteOne({email:" abdulrahman@gmail.com"})
    console.log(data);
    }
    deletedata();
