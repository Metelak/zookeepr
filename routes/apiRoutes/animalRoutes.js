const router = require('express').Router();
// GET route to filter
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');


router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// GET route to filter through array and return a single object
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    // respond with result of findById, else present with 404 error if no record exists    
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// POST route for client requesting server to accept data
router.post('/animals', (req, res) => {
    // req.body is where our incoming content will be
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});

module.exports = router;