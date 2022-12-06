const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Found delay");
});

router.get('/:delayinseconds([0-9]*)', (req, res) => {
    setTimeout(() => {
        res.send("delay is " + req.params.delayinseconds);
    }, req.params.delayinseconds);
})

// settimeout(() => {
//     res.status(200).send("OK");
// }, delayinseconds)

module.exports = router;