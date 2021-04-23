const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const charRouter = require('./char.js');
const taleRouter = require('./tale.js');



// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
});

// user routes
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// character routes
router.use('/characters', charRouter);

// tale routes
router.use('/tales', taleRouter);

module.exports = router;