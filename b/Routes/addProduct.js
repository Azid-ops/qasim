const express = require('express');

const router = express.Router();

const AddProduct = require('../Schema/addProduct');

router.post('/addProduct',(req,res,next)=>{
    const {name,description,type,temprature,water} = req.body;
    const addProduct = new AddProduct({
        name:name,
        description:description,
        type:type,
        temprature:temprature,
        water:water
    });
    
    addProduct.save().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
})

module.exports = router;