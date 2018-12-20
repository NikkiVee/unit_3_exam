const express = require('express');
const router = express.Router();
const { getAllHabitats, getSingleHabitat, addHabitat } = require('../db/queries/habitats_queries.js');

router.get('/', getAllHabitats);
router.get('/:id', getSingleHabitat);
router.post('/', addHabitat);

module.exports = router;
