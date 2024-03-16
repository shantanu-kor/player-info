const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');

const playerRoutes = require('./routes/playerInfo');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/player', playerRoutes);

sequelize.sync()
    .then(res => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })