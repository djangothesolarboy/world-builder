const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");
const fetch = require('node-fetch');

const { User, Tale } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

