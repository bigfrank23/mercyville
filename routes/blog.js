// routes/blog.js
const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.render('pages/blog', { title: 'Blog' });
});

module.exports = router;
