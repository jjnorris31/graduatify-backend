import './database'
import AuthRouter from './routes/auth.routes'
require('@babel/register')({ extensions: ['.js', '.ts'] })
require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

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
