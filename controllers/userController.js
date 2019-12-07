const express = require("express");
let User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    console.log("fdkgndldlkgnd---->", req.body.username, req.body.password);

    let user = await new User({
      username: req.body.username,
      password: req.body.password
    });

    let data = await user.save();
    console.log("asfter save ".data);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const data = await User.find();
    console.log(data);
    res.send({ "succseefully fetched": data });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let result = await User.findById({ _id: req.params.id });
        console.log(result);
        res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteById = async (req, res, next) => {
  await User.deleteOne({ _id: req.params.id });
      console.log("deleted Successfully", result);
      res.send("deleted Successfully " + result);
  
};

exports.search = async (req, res) => {
  let ll = req.params.query;
  let result = User.find({ name: { $regex: ll, $options: "i" } });
      console.log("serched result ", result);
      res.send({ "searched result Successfully": result });
};

exports.permision = async (req, res) => {
  let perm = req.body.permision;
  switch (perm) {
    case 0:
      console.log("Your have Permision : User ");
      res.send("Your have Permision : User ");
      break;
    case 1:
      console.log("Your have Permision : Admin");
      res.send("Your have Permision : Admin");
      break;
    case 2:
      console.log("Your have Permission : Employee");
      res.send("Your have Permission : Employee");
      break;
    default:
      console.log("you have no permision");
      res.send("you have no permision");
  }
};
