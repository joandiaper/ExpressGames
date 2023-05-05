
const { PPTLS } = require('./models/modelsPPTLS');
const { Tamagotchi } = require('./models/modelsTamagotchi');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

mongoose.connect('mongodb+srv://joandiaper:Monlau2022@clusterjoan.18a70.mongodb.net/ExpressGames', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//PPTLS
/*app.get('/showPPTLS', async (req, res) => {
    try {
        const rpslsData = await PPTLS.find();
        res.json(rpslsData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/

app.post('/pptls', (req, res) => {
    const pptlsGame = new PPTLS({
        date: req.body.date,
        time: req.body.time,
        name: req.body.name,
        result: req.body.result
    });

    pptlsGame.save()
        .then(() => {
            res.status(201).send('Data inserted');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Server error');
        });
});

app.get('/resultsPPTLS', async (req, res) => {
    try {
        const results = await PPTLS.find();
        res.json(results);
        console.log(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Tamagotchi
/*app.get('/showTamagotchi', async (req, res) => {
    try {
        const tamagotchiData = await Tamagotchi.find();
        res.json(tamagotchiData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/

app.post('/tamagotchi', (req, res) => {
    const tamagotchiGame = new Tamagotchi({
        name: req.body.name,
        hunger: req.body.hunger,
        happiness: req.body.happiness,
        health: req.body.health,
        years: req.body.years,
        months: req.body.months
    });

    tamagotchiGame.save()
        .then(() => {
            res.status(201).send('Data inserted');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Server error');
        });
});

app.get('/resultsTamagotchi', async (req, res) => {
    try {
        const results = await Tamagotchi.find();
        res.json(results);
        console.log(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});