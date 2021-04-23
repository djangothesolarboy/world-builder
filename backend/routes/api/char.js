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
            bodyType, hairColor, race, 
            personality, motivation, posture,
            facialHair, eyes, behavior, 
            dailyLife, quirks, fatalFlaw, 
            talents, skills, occupation, 
            hobbies, wounds, fearOne, 
            fearTwo, fearThree, fearFour, 
            fearFive, fearSix, positiveTraits, 
            negativeTraits, idle, stressed, 
            exhausted, inebriated, anxious, 
            distracted, attraction, aroused, 
            anger, provoke, overreact, 
            denial, negCoping, posCoping, 
            outerMot, innerMotGen, innerMotSpec 
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
            race:req.body.race,
            personality:req.body.personality,
            motivation:req.body.motivation,
            posture:req.body.posture,
            facialHair:req.body.facialHair,
            eyes:req.body.eyes,
            behavior:req.body.behavior,
            dailyLife:req.body.dailyLife,
            quirks:req.body.quirks,
            fatalFlaw:req.body.fatalFlaw,
            talents:req.body.talents,
            skills:req.body.skills,
            occupation:req.body.occupation,
            hobbies:req.body.hobbies,
            wounds:req.body.wounds,
            fearOne:req.body.fearOne,
            fearTwo:req.body.fearTwo,
            fearThree:req.body.fearThree,
            fearFour:req.body.fearFour,
            fearFive:req.body.fearFive,
            fearSix:req.body.fearSix,
            positiveTraits:req.body.positiveTraits,
            negativeTraits:req.body.negativeTraits,
            idle:req.body.idle,
            stressed:req.body.stressed,
            exhausted:req.body.exhausted,
            inebriated:req.body.inebriated,
            anxious:req.body.anxious,
            distracted:req.body.distracted,
            attraction:req.body.attraction,
            aroused:req.body.aroused,
            anger:req.body.anger,
            provoke:req.body.provoke,
            overreact:req.body.overreact,
            denial:req.body.denial,
            negCoping:req.body.negCoping,
            posCoping:req.body.posCoping,
            outerMot:req.body.outerMot,
            innerMotGen:req.body.innerMotGen,
            innerMotSpec:req.body.innerMotSpec,
        });

        console.log('newChar ---->', newChar)

        return res.json({
            newChar
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
            bodyType, hairColor, race, 
            personality, motivation, posture,
            facialHair, eyes, behavior, 
            dailyLife, quirks, fatalFlaw, 
            talents, skills, occupation, 
            hobbies, wounds, fearOne, 
            fearTwo, fearThree, fearFour, 
            fearFive, fearSix, positiveTraits, 
            negativeTraits, idle, stressed, 
            exhausted, inebriated, anxious, 
            distracted, attraction, aroused, 
            anger, provoke, overreact, 
            denial, negCoping, posCoping, 
            outerMot, innerMotGen, innerMotSpec 
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
            race:req.body.race,
            personality:req.body.personality,
            motivation:req.body.motivation,
            posture:req.body.posture,
            facialHair:req.body.facialHair,
            eyes:req.body.eyes,
            behavior:req.body.behavior,
            dailyLife:req.body.dailyLife,
            quirks:req.body.quirks,
            fatalFlaw:req.body.fatalFlaw,
            talents:req.body.talents,
            skills:req.body.skills,
            occupation:req.body.occupation,
            hobbies:req.body.hobbies,
            wounds:req.body.wounds,
            fearOne:req.body.fearOne,
            fearTwo:req.body.fearTwo,
            fearThree:req.body.fearThree,
            fearFour:req.body.fearFour,
            fearFive:req.body.fearFive,
            fearSix:req.body.fearSix,
            positiveTraits:req.body.positiveTraits,
            negativeTraits:req.body.negativeTraits,
            idle:req.body.idle,
            stressed:req.body.stressed,
            exhausted:req.body.exhausted,
            inebriated:req.body.inebriated,
            anxious:req.body.anxious,
            distracted:req.body.distracted,
            attraction:req.body.attraction,
            aroused:req.body.aroused,
            anger:req.body.anger,
            provoke:req.body.provoke,
            overreact:req.body.overreact,
            denial:req.body.denial,
            negCoping:req.body.negCoping,
            posCoping:req.body.posCoping,
            outerMot:req.body.outerMot,
            innerMotGen:req.body.innerMotGen,
            innerMotSpec:req.body.innerMotSpec,
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