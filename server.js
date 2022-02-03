// import and use fs libary to write data to animals.json
const fs = require('fs');
// another module built into node.js that works with file and directory paths
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware that instructs the server to make certain files readily available
// provides a file path to the 'public' folder of our application and tells the server to make the files static resources
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// if /api is the endpoint it will use router set up in apiRoutes
app.use('/api', apiRoutes);
// if / is the endpoint it will use router set up in htmlRoutes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

