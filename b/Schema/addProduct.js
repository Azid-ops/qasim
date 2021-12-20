const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addProduct = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    temprature: {
        type:String,
        required: true
    },
    water: {
        type:String,
        required: true
    },
});

module.exports = mongoose.model("Add Product", addProduct);

