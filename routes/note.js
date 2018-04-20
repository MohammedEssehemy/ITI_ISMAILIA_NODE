const express = require('express');
const router = express.Router();
const isAuthenticated = require('./../middlewares/isAuthenticated');
const Note = require('./../models/note');
// base url /api/note

router.use(isAuthenticated);


router
.route('/')
.get(async (req,res,next)=>{
  let notes = await Note.find({userId: req.user.id});
  res.json({success: true, notes});
})
.post(async (req,res,next)=>{
  const {title,body} = req.body;
  try{
    debugger;
    let note = await Note.create({title,body,userId: req.user.id});
    res.json({success: true, note})
  } catch (err){
    next(err);
  }
});


module.exports = router;
