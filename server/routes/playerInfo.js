const express = require('express');

const playerController = require('../controllers/player');

const router = express.Router();

router.post('/add-player', playerController.addPlayer);

router.get('/get-players', playerController.getPlayers);

router.get('/get-player/:id', playerController.getPlayer);

router.put('/edit-player/:id', playerController.editPlayer);

module.exports = router;