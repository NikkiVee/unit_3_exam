const express = require('express');
const router = express.Router();
const { getAllResearchers, getSingleResearcher, updateResearcher, deleteResearcher } = require('../db/queries/researchers_queries.js');

router.get('/', getAllResearchers);
router.get('/:id', getSingleResearcher);
router.patch('/:id', updateResearcher);
router.delete('/:id', deleteResearcher);

module.exports = router;
