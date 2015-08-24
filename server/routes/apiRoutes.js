var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppies');
var utilities = require("../logic/puppyUtility");


router.get('/puppies', function(req, res, next) {
  var response = utilities.handleAll();
  res.json(response);
});

//GET - single puppy
router.get('/puppies/:id', function(req, res, next) {
  var response = utilities.handleSingleGet(req.params.id);
  res.json(response);
});

router.post("/puppies", function(req, res, next) {
  var response = utilities.handlePost(req.body.id, req.body.name, req.body.age);
  res.json(response);
});

router.put('/puppies/:id', function(req, res, next) {
  var response = utilities.handlePut(req.params.id, req.body);
  res.json(response);
});

router.delete('/puppies/:id', function(req, res, next) {
  var response = utilities.handleDelete(req.params.id);
  res.json(response);
});

module.exports = router;
