const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:1234@cluster1.8uu8sbp.mongodb.net/food-order?retryWrites=true&w=majority"
);
//connection'on açık veya kapalı iki farklı opsiyon verdiğimiz haliyle veritabanını dinleyen metot.
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Bağlantısı Başarılı.");
});

db.on("error", () => {
  console.log("Mongo DB Bağlantı Hatası.");
});

module.exports = mongoose;
