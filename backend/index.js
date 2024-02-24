const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/studentResultSystem")

app.get('/result', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => err.res.data)
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => err.res.data)
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        regNo: req.body.regNo, 
        caMarks:req.body.caMarks, 
        endMarks: req.body.endMarks,
        gpa:req.body.gpa
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body).then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("Server is running");
})


// ... (Your existing code)

app.post('/signup', (req, res) => {
    const { fname, lname, email, username, password } = req.body;
  
    // Check if the email or username is already registered
    UserModel.findOne({ $or: [{ email: email }, { username: username }] })
      .then(existingUser => {
        if (existingUser) {
          return res.status(400).json({ error: 'Email or username already in use' });
        } else {
          const newUser = new UserModel({ fname, lname, email, username, password });
  
          // Save the new user to the database
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.status(500).json({ error: 'Failed to register' }));
        }
      });
  });


  app.post('/signin', (req, res) => {
    const { username, password } = req.body;
  
    // Check if a user with the provided username exists
    UserModel.findOne({ username: username })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // You should implement password hashing and compare the hashed passwords here
        if (user.password === password) {
          // Successful sign-in
          res.json({ message: 'Sign-in successful', user: user });
        } else {
          res.status(401).json({ error: 'Incorrect password' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Sign-in failed' }));
  });
  
  
  