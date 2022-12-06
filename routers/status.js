const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Found status");
});

router.get('/100', (req, res) => {
    res.status(100).send("Continue");
});

router.get('/200', (req, res) => {
    res.status(200).send("OK");
});

router.get('/300', (req, res) => {
    res.status(300).send("Multiple choices");
});

router.get('/400', (req, res) => {
    res.status(400).send("Bad request");
});

router.get('/500', (req, res) => {
    res.status(500).send("Internal server error");
});

// router.get('/:statuscode([0-9]{3})', (req, res) => {
//     res.status(Number(req.params.statuscode)).send("Sorry could not find");
// });

router.get("*", (req, res) => {
    res.send("URL not found");
})

module.exports = router;