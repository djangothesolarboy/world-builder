const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");
const fetch = require('node-fetch');

const { User, Char } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// get all characters
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const char = await Char.findAll();

        return res.json(char);
    }),
);

// get character by userId
router.get(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const charId = parseInt(req.params.id, 10);
        const chars = await Char.findByPk(charId, {
            where: {
                userId: userId
            }
        });

        return res.json(chars);
    })
);