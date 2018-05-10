const express = require('express');
const cardController = require('./controller');
const router = express.Router();

router.get('/', (req, res) =>{
    cardController.getAll().then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

router.post('/', (req, res) =>{
    cardController.createCard(req.body).then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

router.get('/:idcard', (req, res) => {
    cardController.getCard(req.params.idcard).then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

router.get('/home', isLoggedIn, (req, res) =>{
    cardController.getAll().then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

router.post('/home', isLoggedIn, (req, res) =>{
    cardController.createCard(req.body).then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

router.get('/home/:idcard', isLoggedIn, (req, res) => {
    cardController.getCard(req.params.idcard).then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = router;