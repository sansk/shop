const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

router.get("/product-view", adminController.getAllProducts);
module.exports = {
  router: router,
};
