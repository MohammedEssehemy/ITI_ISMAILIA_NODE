const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true // Always convert `test` to lowercase
  },
  age: Number
});


userSchema.statics.findByUsername = function (username){
  const User = this;
  return User.findOne({username});
}

const User =  mongoose.model('User', userSchema);



module.exports = User;
