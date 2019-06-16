"use strict";

var express = require("express");

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies


app.post('/login', function (req, res) {
  res.status(400).json({ "status": "Inputs for login" });
});

app.post('/signup', function (req, res) {
  res.status(400).json({ "status": "Inputs for signup" });
});

app.post('/newNote', function (req, res) {
  res.status(400).json({ "status": "Inputs for newNote" });
});


app.post('/editNote', function (req, res) {
  res.status(400).json({ "status": "Inputs for editNote" });
});

var server = app.listen(3000);
