const { db } = require('./index.js');

const getAllTaggings = (req, res, next) => {
  db.any('SELECT * FROM taggings')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL TAGGINGS!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getTag = (req, res, next) => {
  let tagId = parseInt(req.params.id);
  db.one('SELECT * FROM taggings WHERE id=$1', [tagId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ONE TAG!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getTagsFromResearcher = (req, res, next) => {
  let tagId = parseInt(req.params.id);
  db.any('SELECT * FROM taggings WHERE researcher_id=$1', [tagId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL TAGGINGS FROM ONE RESEARCHER!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getTagsFromAnimal = (req, res, next) => {
  let tagId = parseInt(req.params.id);
  db.any('SELECT * FROM taggings WHERE animal_id=$1', [tagId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ALL TAGGINGS FROM ONE ANIMAL!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addTag = (req, res, next) => {
  db.none('INSERT INTO taggings (animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})', {
    animal_id: parseInt(req.body.animal_id),
    researcher_id: parseInt(req.body.researcher_id),
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'ADDED NEW TAG!',
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllTaggings, getTag, getTagsFromResearcher, getTagsFromAnimal, addTag };
