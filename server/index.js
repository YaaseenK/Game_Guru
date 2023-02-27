const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./config/connection.js') ;


const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set("debug", true);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
});

<<<<<<< HEAD
mongoose.set('useFindAndModify', false);
=======
mongoose.set('useFindAndModify', false)
>>>>>>> fa05064c3ea8649d0d0faac9a2fb3b7d66d01c1e
