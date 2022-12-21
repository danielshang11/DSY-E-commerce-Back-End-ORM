const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const allCategories = await Category.findAll({include: [Product]})
      res.status(200).json(allCategories);
  } catch (err){
    res.status(500).json(err)
  }
  // Category.findAll({include: [Product]})
  //   .then((allCategories) => res.status(200).json(allCategories))  
  //   .catch ((err) => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const category = await Category.findByPk(req.params.id,{include: [Product]})
      res.status(200).json(category);
  } catch (err){
    res.status(400).json(err)
  }
  // Category.findOne({
  //     where:{id:req.params.id,},
  //     include: [Product],
  //   })
  //   .then((category) => res.status(200).json(category))  
  // .catch ((err)=> {
  //   console.log(err);
  //   res.status(400),json(err)})
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCategory = await Category.create(req.body)
      res.status(200).json(newCategory);
  } catch (err){
    res.status(404).json(err)
  }
  // Category.create(req.body)
  // .then((newCategory)=> res.status(200).json(newCategory))
  // .catch((err)=> {
  //   console.log(err);
  //   res.status(404),json(err)});
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updatedCategory = await Category.update(req.body, {where:{id:req.params.id,}},)
      res.status(200).json(updatedCategory);
  } catch (err){
    res.status(400).json(err)
  }
  // Category.update(req.body, {where:{id:req.params.id,}},)
  // .then((updatedCategory)=> res.status(200).json(updatedCategory))
  // .catch((err)=>{ 
  //   console.log(err);
  //   res.status(400),json(err)});
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deletedCategory = await Category.destroy({where:{id:req.params.id,}},)
      res.status(200).json(deletedCategory);
  } catch (err){
    res.status(400).json(err)
  }
  // Category.destroy({where:{id:req.params.id,}},)
  // .then((deletedCategory)=> res.status(200).json(deletedCategory))
  // .catch((err)=>{ 
  //   console.log(err);
  //   res.status(400),json(err)});
});

module.exports = router;
