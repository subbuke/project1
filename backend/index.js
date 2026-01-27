const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./Models/Model");

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://subramanyamchowdam7654:subbu1919@cluster1.0ybx9.mongodb.net/admin123?appName=Cluster1")
.then(() => {console.log("database connected")})
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.json("Go to data route")
})

//get method
app.get("/data", (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running")
})