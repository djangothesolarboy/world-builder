const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { User, Tale } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// get all tales
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const tales = await Tale.findAll({
            include: User
        });

        return res.json({
            tales: tales
        });
    }),
);

// get tale by userId
router.get(
    '/users/userId/tales/:taleId(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const taleId = parseInt(req.params.id, 10);
        const tale = await Tale.findByPk(taleId, {
            where: {
                userId: userId
            }
        });

        return res.json({ tale: tale });
    })
);

// create new tale
router.post(
    '/',
    requireAuth,
    asyncHandler(async (req, res) => {
        const { tale, userId } = req.body;

        const newTale = await Tale.create({
            tale,
            userId
        });

        return res.json({
            tale: newTale
        });
    }),
);

// delete tale
router.delete(
    '/',
    requireAuth,
    asyncHandler(async (req, res) => {
        const tale = await Tale.findByPk(req.body.taleId, {
            include: {
                User
            }
        });

        await tale.destroy();

        res.json('Tale deleted.');
    })
);

module.exports = router;