// imports
const express = require('express');
const router = express.Router();
const githubController = require('./controllers/githubController');

// configuration main routes
router.get('/repositories', githubController.getTopRepositories);

module.exports = router;
