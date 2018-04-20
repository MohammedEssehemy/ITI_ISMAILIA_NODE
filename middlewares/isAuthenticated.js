const settings = require('./../config/default');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
module.exports = (req,res,next)=>{
  let token = req.headers['authorization'];
  jwt.verify(token, settings.jwt.secret , function(err, decoded) {
      if(err) return res.status(403).send();
      User.findOne({username: decoded.username},(err,user)=>{
        if(err) return next(err);
        req.user = user;
        next()
      })
  });
}
