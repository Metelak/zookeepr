const path = require('path');
const router = require('express').Router();

// tells server where to find the file it should read and return to the client
// connecting the main page html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// connecting the view animals html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
// connecting the view zookeepers html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
// similar to the first route listed (line 129) but its a wildcard
// the '*' is a catch all for undefined routes and server will bring client to homepage as default
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router; 