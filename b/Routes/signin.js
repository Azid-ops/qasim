const express = require('express');

const router = express.Router();

const userSigninSchema = require('../Schema/signup');

const adminSchema = require('../Schema/adminSignup');

router.post('/userLogin',(req,res,next)=>{
    console.log("[signup.js] studentSignin Route");
    const {gmail,password} = req.body;
    userSigninSchema.findOne({
        email:gmail
    }).then(user=>{
        if(user)
        {
            if(user.retype === password)
            {
                res.status(200).send({result:"User Found"});
            }

            else
            {
                res.status(401).send({result:"Wrong Credientials"});
            }
            
        }
        else
        {
            res.status(402).send({result:"User Not Found"});
        }
    }).catch(err=>{
        console.log(err);
    }).catch(err=>{
        console.log("Could not found")
        console.log(err);
    });
})

router.post('/adminLogin',(req,res,next)=>{
    console.log("[signup.js] studentSignin Route");
    const {gmail,password} = req.body;
    adminSchema.findOne({
        email:gmail
    }).then(user=>{
        if(user)
        {
            if(user.retype === password)
            {
                res.status(200).send({result:"User Found"});
            }

            else
            {
                res.status(401).send({result:"Wrong Credientials"});
            }
            
        }
        else
        {
            res.status(402).send({result:"User Not Found"});
        }
    }).catch(err=>{
        console.log(err);
    }).catch(err=>{
        console.log("Could not found")
        console.log(err);
    });
})

module.exports = router;