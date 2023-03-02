const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { UserDetails } = require("./models");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("HERE");
  res.send("Hello World");
});
// console.log("Hello World");

app.post("/form-section", async (req, res) => {
  console.log("req.body", req.body);
  const userData = new UserDetails(req.body);
  userData
    .save()
    .then((item) => {
      console.log("userdata: ", userData);
      console.log("Details: ", item);
      res.send({ item });
    })
    // if error - send an error response - return res.status(400).send("failed to save to DB")
    .catch((err) => {
      console.log("eroor user data: ", userData);
      res.status(400).send("unable to save to database", err);
    });
});

const initDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopping-app");
};
app.listen(port, async () => {
  await initDB();
  console.log(`Example app listening on port ${port}`);
});

// להגדיר פונקציה שכותבת ללוג
// לוודא שהיא נקראת כל פעם שהשרת נטען
// מתוך הפונקציה לשמור משהו לDB
// לשמור משהו לקולקשן של דיטיילססכמה
