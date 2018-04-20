const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('./startup/dbInitialize');

const apiRouter = require('./routes/apis');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).json({message: err.message});
})

module.exports = app;
