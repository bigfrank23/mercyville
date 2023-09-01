const express = require('express');
const app = express();
const path = require('path');
// const expressLayouts = require('express-ejs-layouts');
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const staffsRoute = require('./routes/staffs');
const eventsRoute = require('./routes/events');
const upcomingEventsRoute = require('./routes/upcoming-events');
const pastEventsRoute = require('./routes/past-events');
const contactRoute = require('./routes/contact');
const postsRoute = require('./routes/blog');
const messagesRoute = require('./routes/messages');
const photoGalleryRoute = require('./routes/photo-gallery');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configure express-ejs-layouts
// app.use(expressLayouts);
// app.set('layout', 'layouts/main'); // Specify the default layout file

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/', aboutRoute);
app.use('/', staffsRoute);
app.use('/', eventsRoute);
app.use('/', upcomingEventsRoute);
app.use('/', pastEventsRoute);
app.use('/', contactRoute);
app.use('/', postsRoute);
app.use('/', messagesRoute);
app.use('/', photoGalleryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
