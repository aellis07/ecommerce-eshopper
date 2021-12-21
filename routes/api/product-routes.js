const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll().then((productData) => {
    res.json(productData);
  });
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findByPk(req.params.id).then((productData) => {
    Tag.belongsToMany(Product, { through: ProductTag });
    Product.belongsTo(Category, { foreignKey: "category_id" });

    res.json(productData);
  });
});

// create new product
router.post("/", (req, res) => {
  //  req.body should look like this...
  // Product.create({
  //   product_name: "Basketball",
  //   price: 200.0,
  //   stock: 3,
  //   tagIds: [1, 2, 3, 4],
  // });
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  // Updates the request body where the id matches the request id
  Product.update(req.body, { where: { id: req.params.id } })
    .then((updateProduct) => {
      console.log(updateProduct);
      res.json(updateProduct);
    })
    .catch((err) => {
      res.json.apply(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: { id: req.params.id },
  })
    .then((deletedProduct) => {
      res.json(deletedProduct);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
