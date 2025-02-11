const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: 'https://portfolio-me-pink-one.vercel.app', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
// app.options("*",cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', require('./routes/UserRoutes'));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;