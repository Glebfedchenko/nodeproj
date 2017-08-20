const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const jsonParser = bodyParser.json();
const textParser = bodyParser.text();


app.use(jsonParser);
app.use(textParser);

app.use(express.static(path.join(__dirname, 'views')));
app.use('/home',express.static(path.join(__dirname,'views')))
app.use('/print',express.static(path.join(__dirname,'views')))
app.use('/photography',express.static(path.join(__dirname,'views')))
app.use('/web',express.static(path.join(__dirname,'views')))
app.use('/applications',express.static(path.join(__dirname,'views')))
app.use('/views',express.static(path.join(__dirname,'views')))
app.use('/edit', express.static(path.join(__dirname,'views')))
app.use('/delete',express.static(path.join(__dirname,'views')))
app.use('/new', express.static(path.join(__dirname,'views')))

app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.listen(port, () => {
    console.log(`Running at ${port}`);
})