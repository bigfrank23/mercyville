// routes/past-events.js
const express = require('express');
const router = express.Router();

router.get('/past-events', (req, res) => {
    res.render('pages/events/past-events', { title: 'Past Events' });
});

module.exports = router;
