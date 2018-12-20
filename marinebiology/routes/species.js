const express = require('express');
const router = express.Router();
const { getAllSpecies, getSingleSpecies, createSpecies } = require('../db/queries/species_queries.js');

router.get('/', getAllSpecies);
router.get('/:id', getSingleSpecies);
router.post('/', createSpecies);

module.exports = router;
