const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include: [Product] }).then(results => res.json(results))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ include: [Product], where: {id: req.params.id} }).then(results => res.json(results))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create( req.body ).then(results => res.status(200).json(results))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update( req.body, {
    where: {id: req.params.id}
  }).then(results => res.status(200).json(results))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id}
  }).then(results => res.status(200).json(results)) 
});

module.exports = router;
