const { db } = require('./index.js');

const getAllResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL RESEARCHERS!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.one('SELECT * FROM researchers WHERE id=$1', [researcherId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ONE RESEARCHER!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updateResearcher = (req, res, next) => {
  db.none('UPDATE researchers SET name=${name}, job_title=${job_title}', {
    name: req.body.name,
    job_title: req.body.job_title,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Congrats on updating your RESEARCHER!',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.result('DELETE FROM researchers WHERE id=$1', researcherId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You murdered a researcher soooo good',
      result: result,
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllResearchers, getSingleResearcher, updateResearcher, deleteResearcher };
