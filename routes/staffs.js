// routes/staffs.js
const express = require('express');
const router = express.Router();

router.get('/staffs', (req, res) => {
    res.render('pages/staffs', { title: 'Our Staffs' });
});

module.exports = router;
