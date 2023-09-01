// routes/events.js
const express = require('express');
const router = express.Router();

router.get('/events', (req, res) => {
    res.render('pages/events/events', { title: 'Events' });
});

module.exports = router;
