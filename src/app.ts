var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import './database';
require('dotenv').config();
import {User} from './models/User'
import AuthRouter from './routes/auth.routes';

var app = express();
app.use(express.json());

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/auth', AuthRouter);



app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
})

module.exports = app;
