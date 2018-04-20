const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');
const promisifiedJWT = util.promisify(jwt.sign);
const settings = require('./../config/default');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true
  },
  age: Number,
  password: {
    type: String,
    required: true
  }
});


userSchema.methods.toJSON = function() {
 const obj = this.toObject();
 delete obj.password;
 return obj;
}

// userSchema.pre('save',function (next) {
//   return bcrypt.hash(password, 7).then(function(hash) {
//     this.password = hash;
//     debugger;
//     next()
//   });
// });

userSchema.methods.generateToken = function(){
  let user = this;
  return promisifiedJWT({username: user.username},settings.jwt.secret, {
      expiresIn: settings.jwt.ttl
    });
}

userSchema.pre('save',async function () {
  let password = this.password;
  this.password = await bcrypt.hash(password, 7);
});

const User =  mongoose.model('User', userSchema);

module.exports = User;
