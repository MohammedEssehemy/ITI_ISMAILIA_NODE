const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('./startup/dbInitialize');

const apiRouter = require('./routes/apis');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('/*',(req,res,next)=>{
  res.sendFile(path.join(__dirname, 'public','index.html'));
})

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).json({message: err.message});
})




module.exports = app;
