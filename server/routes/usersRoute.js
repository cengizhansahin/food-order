const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

//*Register endpointini yazalım.
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;
  const oldUser = await userModel.findOne({ mail: mail });
  if (oldUser) {
    res.status(400).json({ message: "Böyle bir kullanıcı bulunmaktadır." });
  } else {
    const newUser = new userModel({
      name: name,
      mail: mail,
      password: password,
    });
    try {
      await newUser.save();
      res.send(newUser);
    } catch (error) {
      res.send(error);
    }
  }
});
module.exports = router;

//login endpoint
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await userModel.find({ mail: mail, password: password });
    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res
        .status(400)
        .json({ message: "Girilen bilgilerde kullanıcı bulunmamaktadır.." });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
