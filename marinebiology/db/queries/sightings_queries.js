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

module.exports = { getAllSightings };
