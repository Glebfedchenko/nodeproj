const session = require('express-session');
const mysqlSession = require('express-mysql-session')(session);
const connection = require('./connection');

const sessionOptions = {
    host:'localhost',
    port:'8000',
    user:'root',
    password:'',
    database:'data',
    checkExpirationInterval: 90000,
    expiration: 90000
};

const sessionStore = new mysqlSession(sessionOptions);

module.exports = (app) => {
    app.use(session({
        secret:'secret',
        store:sessionStore,
        saveUninitialized:true,
        resave:true,
        secure:false
    }))
}

