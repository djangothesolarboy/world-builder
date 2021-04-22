const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { User, Char } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// get all characters
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const chars = await Char.findAll({
            include: User
        });

        return res.json({
            characters: chars
        });
    }),
);

// get character by userId
router.get(
    '/users/:userId/characters/:charId(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const charId = parseInt(req.params.id, 10);
        const char = await Char.findByPk(charId, {
            where: {
                userId: userId
            }
        });

        return res.json({ character: char });
    })
);

// create new character
router.post(
    '/',
    requireAuth,
    asyncHandler(async (req, res) => {
        const { char, userId } = req.body;

        const newChar = await Char.create({
            char,
            userId
        });

        return res.json({
            char: newChar
        });
    }),
);

// delete character
router.delete(
    '/',
    requireAuth,
    asyncHandler(async (req, res) => {
        const char = await Char.findByPk(req.body.charId, {
            include: {
                User
            }
        });

        await char.destroy();

        res.json('Character deleted.');
    })
);

module.exports = router;