const express = require('express');
const morgan = require('morgan');
// const mainRouter = require('./routes/mainRouter'); //!se agrega cuando se cree
const app = express();

app.use(morgan('dev'));
app.use(express.json());

// app.use(mainRouter); //!se agrega cuando se cree

module.exporst = app;



