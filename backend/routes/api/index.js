const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const charRouter = require('./char.js');
const taleRouter = require('./tale.js');

// user routes
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// character routes
router.use('/characters', charRouter);
router.use('/characters/:id', charRouter);

// tale routes
router.use('/tales', taleRouter);
router.use('/tales/:id', taleRouter);

module.exports = router;