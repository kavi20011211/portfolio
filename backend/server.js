const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/users',require('./routes/UserRoutes'));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;