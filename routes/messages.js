// routes/messages.js
const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {
    res.render('pages/messages', { title: 'Messages' });
});

module.exports = router;
