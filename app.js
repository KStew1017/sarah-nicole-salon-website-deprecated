const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');
const stylistsRouter = require('./routes/stylists.js');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'), {extensions:['html']}));
app.use('/', indexRouter);
app.use('/stylists', stylistsRouter);

app.get('/stylists', (req, res) => {
    res.status(403).render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server running successfully');
});