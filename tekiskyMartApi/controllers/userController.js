import { hashPassword, comparepass } from "../encryption/encrypt.js";
import {  registerUserSer,  getdbpassword,  getprofileser,} from "../services/userServices.js";
import { generateToken, verifyToken } from "../autherization/jwt.js";

export const getProfile = async (req, res) => {
  let { email } = req.body;
  let beartoken = req.headers.authorization;
  let arrToken = beartoken.split(" "); //it returns array
  let token = arrToken[1];
  console.log(token);
  let tokenEmail = verifyToken(token);
  console.log(` token email is ${tokenEmail}`);

  if (email == tokenEmail) {
    let user = await getprofileser(email);
    res.json({ "user ": user });
  } else {
    res.json({ "message": "error" });

  }

};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let dbpass = await getdbpassword(email);
    let status = await comparepass(password, dbpass);
    if (status) {
      let token = generateToken(email);
      res.json({ message: "success", token: token }).status(201);
    } else {
      res.json({ message: "error" }).status(401);
    }
  } catch (error) {
    console.log(error);
  }
};

export let registeruser = async (req, res) => {
  let { firstname, surname, address, mobile, email, password } = req.body;
  // let user=req.body
  // console.log(user);
  try {
    let hashPass = await hashPassword(password);
    let user = registerUserSer({
      firstname,
      surname,
      address,
      mobile,
      email,
      password: hashPass,
    });
    if ((user = "success")) {
      res.json({ message: "User Registered Successfully" }).status(201);
    } else {
      res.json({ message: ` user not created ${error}` }).status(401);
    }
  } catch (error) {
    console.log(`error while ${error}`).staut(501);
  }
};
