const { db } = require('./index.js');

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
    .then(data => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Received ALL ANIMALS!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id);
  db.one('SELECT * FROM animals WHERE id=$1', [animalId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ONE ANIMAL!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addAnimal = (req, res, next) => {
  db.none('INSERT INTO animals (species_id, nickname) VALUES (${species_id}, ${nickname})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Congrats on your NEW ANIMAL!',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const updateAnimal = (req, res, next) => {
  db.none('UPDATE animals SET species_id=${species_id}, nickname=${nickname}', {
    species_id: parseInt(req.body.species_id),
    nickname: req.body.nickname,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Congrats on updating your ANIMAL!',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id);
  db.result('DELETE FROM animals WHERE id=$1', animalId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You murdered a ANIMAL soooo good!',
      result: result,
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getAllAnimals, getSingleAnimal, addAnimal, updateAnimal, deleteAnimal };
