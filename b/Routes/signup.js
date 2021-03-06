const express = require('express');

const router = express.Router();

const bcrypt = require("bcryptjs");

const userSignupSchema = require('../Schema/signup');

const adminSignUp = require('../Schema/adminSignup');

router.post('/userSignup',async (req,res,next)=>{
    console.log("[signup.js] studentSignup Route");
    const {name,gmail,password,retype} = req.body;
    let hashedPassword = await bcrypt.hash(password,12);

    const userSignup = new userSignupSchema({
        name:name,
        email:gmail,
        password:hashedPassword,
        retype:retype
    })
    
    userSignupSchema.findOne({
        email:gmail
    }).then(user=>{
        if(!user)
        {
            if(gmail.includes("@gmail.com"))
            {
                if(password.length>=5)
                {
                    if(password === retype)
                    {
                        userSignup.save().then(result=>{
                            res.status(200).send({result: 'success' })
                        }).catch(err=>{
                            console.log(err);
                        });
                    }

                    else
                    {
                        res.status(402).send({result:"Password Not matched"})
                    }
                }

                else
                {
                    res.status(403).send({result:"Password Length is too Short"})
                }
                
            }
            else
            {
                res.status(400).send({result:"Wrong Gmail Syntax"})
            }
        }
        else
        {
            res.status(401).send({result:"Wrong Gmail Syntax"});
            console.log("Gmail Already Exists");
        }

    }).catch(err=>{
        console.log(err);
    })  
})

router.post('/adminSignup',async (req,res,next)=>{
    console.log("[signup.js] studentSignup Route");
    const {name,gmail,password,retype} = req.body;

    const adminSignup = new adminSignUp({
        name:name,
        email:gmail,
        password:password,
        retype:retype
    })
    
    adminSignUp.findOne({
        email:gmail
    }).then(user=>{
        if(!user)
        {
            if(gmail.includes("@gmail.com"))
            {
                if(password.length>=5)
                {
                    if(password === retype)
                    {
                        adminSignup.save().then(result=>{
                            res.status(200).send({result: 'success' })
                        }).catch(err=>{
                            console.log(err);
                        });
                    }

                    else
                    {
                        res.status(402).send({result:"Password Not matched"})
                    }
                }

                else
                {
                    res.status(403).send({result:"Password Length is too Short"})
                }
                
            }
            else
            {
                res.status(400).send({result:"Wrong Gmail Syntax"})
            }
        }
        else
        {
            res.status(401).send({result:"Wrong Gmail Syntax"});
            console.log("Gmail Already Exists");
        }

    }).catch(err=>{
        console.log(err);
    })  
})

module.exports = router;