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
    '/:id(\\d+)',
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
    '/new',
    asyncHandler(async (req, res) => {
        const { 
            name, bio, userId, 
            age, gender, height,
            bodyType, hairColor, race 
        } = req.body;

        const newChar = await Char.create({
            name:req.body.name,
            bio:req.body.bio,
            userId:req.body.userId,
            age:req.body.age,
            gender:req.body.gender,
            height:req.body.height,
            bodyType:req.body.bodyType,
            hairColor:req.body.hairColor,
            race:req.body.race
        });

        console.log('newChar ---->', newChar)

        return res.json({
            character: newChar
        });
    }),
);

// edit character
router.put(
    '/new',
    requireAuth,
    asyncHandler(async (req, res) => {
        const char = await Char.findByPk(req.params.id);

        const { 
            name, bio, userId, 
            age, gender, height,
            bodyType, hairColor, race 
        } = req.body;

        await char.create({
            name:req.body.name,
            bio:req.body.bio,
            userId:req.body.userId,
            age:req.body.age,
            gender:req.body.gender,
            height:req.body.height,
            bodyType:req.body.bodyType,
            hairColor:req.body.hairColor,
            race:req.body.race
        });

        console.log('update ---->', char)

        return res.json({
            char
        });
    }),
);

// delete character
router.delete(
    '/:id(\\d+)',
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