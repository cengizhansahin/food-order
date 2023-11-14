const express = require("express");
const burgerModel = require("../models/burgerModels");
const router = express.Router();

router.get("/getBurgers", async (req, res) => {
  const foods = await burgerModel.find();
  res.json(foods);
});

router.post("/deleteBurger", async (req, res) => {
  const { burgerid } = req.body;
  try {
    const response = await burgerModel.findByIdAndDelete({ _id: burgerid });
    res.send("Menü silme işlemi başarılı.");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/editBurger", async (req, res) => {
  const editedBurger = req.body.editedBurger;
  try {
    const burger = await burgerModel.findOne({ _id: editedBurger._id });
    burger.ad = editedBurger.ad;
    burger.img = editedBurger.img;
    burger.fiyat = [editedBurger.fiyat];
    burger.ozellik = [editedBurger.ozellik];
    burger.kategori = editedBurger.kategori;
    burger.desc = editedBurger.desc;
    await burger.save();
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/getBurgerById", async (req, res) => {
  // const burgerid = req.body.burgerid;
  const { burgerid } = req.body;

  try {
    const burger = await burgerModel.findOne({ _id: burgerid });
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Menü ekleme
router.post("/addBurger", async (req, res) => {
  const menu = req.body.menu;

  try {
    const newMenu = new burgerModel({
      ad: menu.ad,
      ozellik: ["small", "medium", "mega"],
      img: menu.img,
      desc: menu.desc,
      kategori: menu.kategori,
      fiyat: [menu.fiyat],
    });

    await newMenu.save();
    res.send(newMenu);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
