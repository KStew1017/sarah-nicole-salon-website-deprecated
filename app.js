const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');
const stylistsRouter = require('./routes/stylists.js');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/stylists', stylistsRouter);

app.get('/stylists', (req, res) => {
    res.status(403).render('error');
});

app.listen(3000);