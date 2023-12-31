const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/movies'
router.get("/", moviesCtrl.index)
router.get("/:id", moviesCtrl.detail)

module.exports = router