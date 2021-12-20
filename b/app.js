const express = require("express");

const mongoose = require("mongoose");

const studentSignup = require('./Routes/signup');

const adminLogin = require('./Routes/signin');

const addProduct = require('./Routes/addProduct');

const app = express();

app.use(express.json());

app.use(adminLogin);

app.use(studentSignup);

app.use(addProduct);



mongoose.connect("mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/VegeGarden").then(res=>{
    app.listen(5000);
});