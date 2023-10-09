const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);
const logIn = async (req, res) => {
  try {
    // step 1 : get the name, email and password
    const user = req.body;
    // step 2 : get the login credential from db
    const credentials = await User.find();
    bcrypt
      .compare(user.password, credentials[0].password)
      .then((resp) => {
        res.status(200).send(resp);
        console.log("hashRes", resp);
      })
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const hashPassword = async (req, res) => {
  try {
    const credentials = req.body.password;
    const hashedPassword = bcrypt.hashSync(credentials, 10);
    res.send(hashedPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logIn, hashPassword };
