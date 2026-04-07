const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeController.getIndex);
router.get("/product-list", homeController.getProducts);
router.get("/cart", homeController.getCart);
router.get("/checkout", homeController.getCheckout);
router.get("/orders", homeController.getOrders);

module.exports = {
  router: router,
};
