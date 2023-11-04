const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const burgerModel = require("./models/burgerModels");

app.use(express.json());
app.use(cors());

//serverı ayağa kaldırmak için

app.listen(4000, () => {
  console.log(
    "Food order serverı 4000 portunda başarıyla ayağa kalmaktadır 🔥🔥🔥"
  );
});

app.get("/getBurgers", async (req, res) => {
  const foods = await burgerModel.find();
  res.json(foods);
});
