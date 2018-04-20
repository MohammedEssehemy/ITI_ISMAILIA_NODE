const express = require('express');
const apiRouter = express.Router();
const NoteRouter = require('./note');
const userRouter = require('./user');


apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: false }));
apiRouter.use('/note',NoteRouter);
apiRouter.use('/user',userRouter);


module.exports = apiRouter;
