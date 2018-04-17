const express = require('express');
const apiRouter = express.Router();
const User = require('./../models/user');

apiRouter.get('/',(req,res,next)=>{
  res.json({message: `hellloooooooooo ${req.query.name}`});
  // res.send(`hellloooooooooo ${req.query.name}`);

});

apiRouter.use(express.json());


apiRouter
.route('/user/findOne')
.get((req,res,next)=>{
  //  /user/findOne?username=mohammed
    debugger;
    let queryPromise = User.findOne(req.query);
    queryPromise
    .then(user=>{
      res.json(user);
    })
    .catch(next)

  // debugger;
  // let callingResult =  User.findByUsername('mohammed');
  // debugger;
  // callingResult.then(user=>{
  //   debugger;
  // })
})

apiRouter
.route('/user/:_id')
.get((req,res,next)=>{
  User.findOne({_id: req.params._id},(err,user)=>{
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

apiRouter
.route('/user')
.get((req,res,next)=>{
  User.find((err,users)=>{
    if(err) return next(err);
    res.json(users);
  });
})
.post((req,res,next)=>{
  let userObj = User.create(req.body,function (err, user) {
    if(err){
      return next(err);
    }
    res.json(user);
  });
});



module.exports = apiRouter;
