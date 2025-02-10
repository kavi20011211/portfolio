const express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/users',require('./routes/UserRoutes'));

module.exports = app;