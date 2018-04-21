const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const bcrypt = require('bcrypt');
const isAuthenticated = require('./../middlewares/isAuthenticated');

// base url /api/user

router
.route('/login')
.post(async (req,res,next)=>{
  debugger;
  let {password, username} = req.body;
  let user = await User.findOne({username});
  if(!user) return res.status(404).json({success: false, message: 'username not found'});
  let isMatch = await bcrypt.compare(password, user.password);
  if(isMatch){
    let token = await user.generateToken();
    return res.status(200).json({success:true, message: 'authenticated',token});
  } else {
    return res.status(400).json({success:false, message: 'wrong password'});
  }
});


router.post('/',(req,res,next)=>{
  let userObj = User.create(req.body,function (err, user) {
    if(err){
      return next(err);
    }
    user.generateToken().then(token=>{
      res.json({...user,token});
    });
  });
});


router.use(isAuthenticated);

router
.route('/:_id')
.get((req,res,next)=>{
  User.findOne({_id: req.params._id},(err,user)=>{
    debugger;
    res.json(user);
  });
})
.patch((req,res,next)=>{
      User.findOneAndUpdate(
        {_id:req.params._id},
        {$set: { age: req.body.age }},
        {new: true},
        (err,updatedDoc)=>{
          if(err) return next(err);
          res.json(updatedDoc)
        }
      )
});


router
.route('/')
.get((req,res,next)=>{
  debugger;
  User.find((err,users)=>{
    if(err) return next(err);
    res.json(users);
  });
});




module.exports= router;
