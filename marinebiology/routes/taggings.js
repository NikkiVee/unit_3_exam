const express = require('express');
const router = express.Router();
const { getAllTaggings, getTag, getTagsFromResearcher, getTagsFromAnimal, addTag } = require('../db/queries/taggings_queries.js');

router.get('/', getAllTaggings);
router.get('/:id', getTag);
router.get('/researchers/:id', getTagsFromResearcher);
router.get('/animals/:id', getTagsFromAnimal);
router.post('/', addTag);

module.exports = router;
