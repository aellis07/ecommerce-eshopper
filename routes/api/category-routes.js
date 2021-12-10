const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    name: req.body.name,
  })
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      name: req.body.name,
    },
    { where: { id: req.params.id } }
  )
    .then((updateCategory) => {
      res.json(updateCategory);
    })
    .catch((err) => {
      res.json.apply(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
