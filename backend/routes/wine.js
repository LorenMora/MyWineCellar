const router = require('express').Router();
let Wine = require('../models/wine.model');

router.route('/').get((req, res) => {
  Wine.find()
    .then(wines => res.json(wines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const winename = req.body.winename;
  const rating = Number(req.body.rating); // converting to number data type
  const description = req.body.description;
  const date = Date.parse(req.body.date); // converting to date data type

  const newWine = new Wine({
    username,
    winename,
    rating,
    description,
    date,
  });

  newWine.save()
  .then(() => res.json('Wine added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Wine.findById(req.params.id)
    .then(wine => res.json(wine))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Wine.findByIdAndDelete(req.params.id)
    .then(() => res.json('Wine deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Wine.findById(req.params.id)
    .then(wine => {
      wine.username = req.body.username;
      wine.winename = req.body.winename;
      wine.rating = Number(req.body.rating);
      wine.description = req.body.description;
      wine.date = Date.parse(req.body.date);

      wine.save()
        .then(() => res.json('Wine updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;