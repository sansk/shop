const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = require("./adminRoutes").products; // Can be deleted
  res.render("home", { pageTitle: "Home", path: "/", prods: products });
});

module.exports = {
  router: router,
};
