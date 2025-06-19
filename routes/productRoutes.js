const express = require("express");

const tourController = require("./../controllers/productController");

const router = express.Router();
// Get all products
router
  .route("/")
  .get(tourController.getAllProducts)
  .post(tourController.createProduct);

router
  .route("/:id")
  .get(tourController.getProductById)
  .patch(tourController.updateProduct);

module.exports = router;
