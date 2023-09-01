// routes/gallery.js
const express = require('express');
const router = express.Router();

router.get('/photo-gallery', (req, res) => {
    res.render('pages/gallery/photo-gallery', { title: 'Blog' });
});

module.exports = router;