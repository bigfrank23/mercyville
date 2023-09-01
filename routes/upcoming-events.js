// routes/upcoming-events.js
const express = require('express');
const router = express.Router();

router.get('/upcoming-events', (req, res) => {
    res.render('pages/events/upcoming-events', { title: 'Upcoming Events' });
});

module.exports = router;
