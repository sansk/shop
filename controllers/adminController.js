const Product = require("../models/productModel");

// const products = Product.fetchAllProducts();

const getAddProduct = (req, res, next) => {
  res.render("./admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

const postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();

  res.redirect("/");
};

const getAllProducts = (req, res, next) => {
  //   res.render("./admin/product-view", {
  //     pageTitle: "Manage Products",
  //     path: "/admin/product-view",
  //     prods: products,
  //   });

  // File Reads
  Product.fetchAllProducts((products) => {
    res.render("admin/product-view", {
      prods: products,
      pageTitle: "Manage Products",
      path: "/admin/product-view",
    });
  });
  //End of File reads
};

module.exports = {
  getAddProduct: getAddProduct,
  postAddProduct: postAddProduct,
  getAllProducts: getAllProducts,
};
