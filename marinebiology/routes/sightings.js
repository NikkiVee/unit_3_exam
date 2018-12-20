const express = require('express');
const router = express.Router();
const { getAllSightings } = require('../db/queries/sightings_queries.js');

router.get('/', getAllSightings);

module.exports = router;
