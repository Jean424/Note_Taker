const express = require('express');

// Import our modularized files
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
