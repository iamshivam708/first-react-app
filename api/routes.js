const express = require("express");
const router = express.Router();
const db = require("./DB.js");


//signup
router.post("/signup", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  db.query(
    "INSERT INTO signup(name,email,password) VALUES(?,?,?)",
    [name, email, password],
    function (err, result) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(result);
      }
    }
  );
});


//login
router.post("/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  db.query(
    "SELECT * FROM signup WHERE email='" +
      email +
      "' AND password='" +
      password +
      "'",
    function (error, result) {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send(result);
      }
    }
  );
});

//user
router.get('/currentUser/:email',function(req,res){
  var email = req.params.email;
  db.query("SELECT * FROM signup WHERE email=?",[email],function(error,result){
      if(error){
          res.send(error);
      }else{
          res.send(result);
      }
  })
})

//update user details
router.put('/currentUser/update',function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var id = req.body.id;
  db.query("UPDATE signup SET name='"+name+"',email='"+email+"',password='"+password+"' WHERE signup_id='"+id+"' ",function(result,error){
    if(!error){
      res.status(400).send(error);
    }else{
      res.send("success");
    }
  })
})

//create posts
router.post('/posts',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  db.query("INSERT INTO posts(title,description) VALUES(?,?)",[title,description],function(error,result){
    if(error){
      res.send(error);
    }else{
      res.send(result)
    }
  })
})

//getting posts
router.get('/get/posts',function(req,res){
  db.query("SELECT * FROM posts",function(error,result){
    if(error){
      res.send(error);
    }else{
      res.send(result);
    }
  })
})

//getting post with id
router.get('/get/posts/:id',function(req,res){
  var id = req.params.id;
  db.query("SELECT * FROM posts WHERE post_id='"+id+"'",function(error,result){
    if(error){
      res.send(error);
    }else{
      res.send(result);
    }
  })
})

//updating post
router.put("/post/update",function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  var id = req.body.id
  db.query("UPDATE posts SET title='"+title+"',description ='"+description+"' WHERE post_id='"+id+"'",function(error,result){
    if(error){
      res.send(error);
    }else{
      res.send(result)
    }
  })
})

//deleting post
router.delete('/post/delete/:id',function(req,res){
  var id = req.params.id
  db.query("DELETE FROM posts WHERE post_id='"+id+"'",function(error,result){
    if(error){
      res.send(error);
    }else{
      res.send(result);
    }
  })
})

module.exports = router;
