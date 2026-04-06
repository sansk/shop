const Product = require("../models/productModel");

const products = Product.fetchAll();

const getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    prods: products,
  });
};

const postAddProduct = (req, res, next) => {
  const { title } = req.body;
  const product = new Product(title);
  product.save();

  res.redirect("/");
};

const getAllProducts = (req, res, next) => {
  res.render("home", { pageTitle: "Home", path: "/", prods: products });
};

module.exports = {
  getAddProduct: getAddProduct,
  postAddProduct: postAddProduct,
  getAllProducts: getAllProducts,
};
