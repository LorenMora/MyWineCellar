const router = require('express').Router();
let User = require('../models/user.model');

//first endpoint to handle http requests
router.route('/').get((req, res) => {
  User.find() // mongoose method that will get a list of Users from the mongoDB database. Returns a promise
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save() //saves to database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

//can add update and delete crud options