var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
import {User} from './controllers/User'

const myUser = new User('JuanJo', 'Basilio', 'jjnorris31@gmail.com', '1234');
console.log({myUser});

myUser.name = 'José';
console.log({myUser});


var admin = require("firebase-admin");
var serviceAccount = require("../graduatify-firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

console.log({admin});

var indexRouter = require('../routes');
var usersRouter = require('../routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
})

module.exports = app;
