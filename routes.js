const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Primer HTTP GET zahteva sa rutom testRuta');
});

router.post('/', (req, res) => {
	res.send('Primer HTTP POST zahteva sa rutom testRuta');
});

router.all('/', (req, res) => {
	res.send('Obrada bilo kog HTTP zahteva sa rutom testRuta');
});

// Exportuje se router, tj. kada se sa require ucita 
// routes.js fajl ucitace se zapravo router

module.exports = router;