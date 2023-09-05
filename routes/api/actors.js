const express = require('express');
const router = express.Router();
const actorsCtrl = require('../../controllers/api/actors');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/movies'
router.get("/", actorsCtrl.index)

module.exports = router