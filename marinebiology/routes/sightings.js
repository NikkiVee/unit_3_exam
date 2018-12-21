const express = require('express');
const router = express.Router();
const { getAllSightings, getAllSightingsOfSpecies, getAllSightingsOfResearcher, getAllSightingsFromHabitat, newSighting, deleteSighting } = require('../db/queries/sightings_queries.js');

router.get('/', getAllSightings);
router.get('/species/:id', getAllSightingsOfSpecies);
router.get('/researcher/:id', getAllSightingsOfResearcher);
router.get('/habitats/:id', getAllSightingsFromHabitat);
router.post('/', newSighting);
router.delete('/:id', deleteSighting);

module.exports = router;
