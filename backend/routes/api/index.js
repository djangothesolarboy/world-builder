const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const charRouter = require('./char.js');
const taleRouter = require('./tale.js');

// user routes
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// character routes
router.use('/users/:userId/characters', charRouter);
router.use('/users/:userId/characters/:charId', charRouter);

// tale routes
router.use('/users/:userId/tales', taleRouter);
router.use('/users/:userId/tales/:taleId', taleRouter);

module.exports = router;