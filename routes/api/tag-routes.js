const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [Category,{model: Tag, through: ProductTag}]})
    .then((allTags) => res.status(200).json(allTags))  
    .catch ((err) => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({where:{id:req.params.id,}, include:[{model:Product, through:ProductTag},],})
    .then((tag) => res.status(200).json(tag))
    .catch ((err) => {
      console.log(err);
      res.status(404).json(err)
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => res.status(200).json(newTag))
    .catch ((err) => {
      console.log(err);
      res.status(404).json(err)
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.create(req.body,{where:{id:req.params.id,}},)
    .then((updatedTag) => res.status(200).json(updatedTag))
    .catch ((err) => {
      console.log(err);
      res.status(404).json(err)
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id,}},)
    .then((deletedTag) => res.status(200).json(deletedTag))
    .catch ((err) => {
      console.log(err);
      res.status(404).json(err)
    });
});

module.exports = router;
