const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product]})
    .then((allCategories) => res.status(200).json(allCategories))  
    .catch ((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
      where:{id:req.params.id,},
      include: [Product],
    })
    .then((category) => res.status(200).json(category))  
  .catch ((err)=> {
    console.log(err);
    res.status(400),json(err)})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCategory)=> res.status(200).json(newCategory))
  .catch((err)=> {
    console.log(err);
    res.status(404),json(err)});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where:{id:req.params.id,}},)
  .then((updatedCategory)=> res.status(200).json(updatedCategory))
  .catch((err)=>{ 
    console.log(err);
    res.status(400),json(err)});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where:{id:req.params.id,}},)
  .then((deletedCategory)=> res.status(200).json(deletedCategory))
  .catch((err)=>{ 
    console.log(err);
    res.status(400),json(err)});
});

module.exports = router;
