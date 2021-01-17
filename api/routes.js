const express = require('express');
const router = express.Router();
const db = require('./DB.js')

router.post('/signup',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    db.query("INSERT INTO signup(name,email,password) VALUES(?,?,?)",[name,email,password], function(err,result){
        if(err){
            res.status(400).send(err);
        }else{
            res.send(result);
        }
    })
})

router.get('/login',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    db.query("SELECT * FROM signup WHERE email='"+email+"' AND password='"+password+"'",function(error,result){
        if(error){
            res.status(400).send(error);
        }
        else{
            res.send(result)
        }
    })
})

module.exports = router