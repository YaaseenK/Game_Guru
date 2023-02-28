const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const db = require('./config/connection.js') ;
const PORT = process.env.PORT || 3001;
const app = express();
const postRoutes = require('./routes');

// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '../client/build')));
}
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, '../client/'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', postRoutes);


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
});
