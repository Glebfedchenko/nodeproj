const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const jsonParser = bodyParser.json();
const textParser = bodyParser.text();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug')

app.use(jsonParser);
app.use(textParser);


app.use('/', router);


app.listen(port,()=>{
    console.log(`Running at ${port}`);
})