const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});



const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
