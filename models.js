const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let UserDetails;
const initDetails = () => {
  const detailsSchema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String,
    budget: String,
    shirtSize: String,
    pantsSize: String,
    other: String,
  });
  UserDetails = mongoose.model("UserDetails", detailsSchema);
};

function init() {
  initDetails();
  //initialize all the models & schemas here
}

const someFunc = () => {
  console.log("hila");
  const person = new UserDetails({ firstName: "idan", lastName: "haviv" });
  person
    .save()
    .then((item) => {
      console.log("item saved to database");
    })
    .catch((err) => {
      console.log("unable to save to database");
    });
};
init();
someFunc();

module.exports = { UserDetails };
