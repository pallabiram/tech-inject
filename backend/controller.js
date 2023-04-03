const userModel = require("../models/empModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//==================> Create user <=======================
const register = async (req, res) => {
  try {
    let Body = req.body;
    const { Name, phone } = Body;

    if (!Body.Name) {
      return res.status(400).json("Please enter username");
    }

    //==================> Phone validation <=======================
    if (!phone) {
      return res.status(400).json("Please enter phone number");
    }
    const Phoneregx = /^[0-9]{10}$/;
    let Phone = Phoneregx.test(Body.phone);
    if (!Phone) {
      return res.status(400).json("Please enter valid Phone number.");
    }

    //<===================
    const dublicatePhone = await userModel.findOne({ phone });
    if (dublicatePhone) {
      return res.status(400).json(" Number Already Exists");
    }
    let savedData = await userModel.create(Body);
    res.status(201).send({ data: savedData });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = register;
