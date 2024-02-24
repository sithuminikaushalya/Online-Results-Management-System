// const mongoose = require("mongoose")

// const UserSchema = new mongoose.Schema({
//     regNo: String,
//     caMarks: Number,
//     endMarks: Number,
//     gpa: Number
// })

// const UserModel = mongoose.model("users", UserSchema) //first collection name

// module.exports = UserModel;


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  regNo: String,
  caMarks: Number,
  endMarks: Number,
  gpa: Number,
  firstName: String,   // Add firstName field
  lastName: String,    // Add lastName field
  email: String,
  username: String,
  password: String
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;

