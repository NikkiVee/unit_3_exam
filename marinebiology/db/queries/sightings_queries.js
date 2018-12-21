const { db } = require('./index.js');

const getAllSightings = (req, res, next) => {
  db.any('SELECT * FROM sightings')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL SIGHTINGS!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllSightingsOfSpecies = (req, res, next) => {
  let sightings = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE species_id=$1', [sightings])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL SIGHTINGS FROM SPECIES!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllSightingsOfResearcher = (req, res, next) => {
  let sightings = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE researcher_id=$1', [sightings])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL SIGHTINGS FROM RESEARCHER!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllSightingsFromHabitat = (req, res, next) => {
  let sightings = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE habitat_id=$1', [sightings])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL SIGHTINGS FROM THIS HABITAT!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const newSighting = (req, res, next) => {
  db.none('UPDATE sightings SET species_id=${species_id}, researcher_id=${researcher_id}, habitat_id=${habitat_id}', {
    species_id: parseInt(req.body.species_id),
    researcher_id: req.body.researcher_id,
    habitat_id: req.body.habitat_id,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Congrats on adding a NEW SIGHTING!',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteSighting = (req, res, next) => {
  let sightingId = parseInt(req.params.id);
  db.result('DELETE FROM sightings WHERE id=$1', sightingId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You delted a sighting. Lets go eat this animal!',
      result: result,
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllSightings, getAllSightingsOfSpecies, getAllSightingsOfResearcher, getAllSightingsFromHabitat, newSighting, deleteSighting };
