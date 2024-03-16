const Player = require('../models/player');

exports.addPlayer = (req, res, next) => {
    const { name, dateOfBirth, photoUrl, birthPlace, career, matches, score, fifties, centuries, wickets, average } = req.body;
    Player.create({
        name, dateOfBirth, photoUrl, birthPlace, career, matches, score, fifties, centuries, wickets, average
    })
    res.send('Player added successfully!');
};

exports.getPlayers = (req, res, next) => {
    Player.findAll()
        .then(data => {
            const playerList = [];
            for (let i of data) {
                playerList.push({ id: i.id, name: i.name })
            }
            res.json(playerList);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPlayer = (req, res, next) => {
    const playerId = req.params.id;
    Player.findByPk(playerId)
        .then(player => {
            res.json(player);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.editPlayer = (req, res, next) => {
    const { name, dateOfBirth, photoUrl, birthPlace, career, matches, score, fifties, centuries, wickets, average } = req.body;
    const playerId = req.params.id;
    Player.findByPk(playerId)
        .then(player => {
            player.name = name;
            player.dateOfBirth = dateOfBirth;
            player.photoUrl = photoUrl;
            player.birthPlace = birthPlace;
            player.career = career;
            player.matches = matches;
            player.score = score;
            player.fifties = fifties;
            player.centuries = centuries;
            player.wickets = wickets;
            player.average = average;
            player.save();
            res.send('Player updated successfully');
        })
        .catch(err => {
            console.log(err);
        });
};