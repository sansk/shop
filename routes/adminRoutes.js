const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    prods: products,
  });
});

router.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({ title: title });
  res.redirect("/");
});

module.exports = {
  router: router,
  products: products,
};
