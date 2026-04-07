const Product = require("../models/productModel");

const products = Product.fetchAll();

const getIndex = (req, res, next) => {
  res.render("./home/index", {
    pageTitle: "Home",
    path: "/",
    prods: products,
  });
};

const getProducts = (req, res, next) => {
  res.render("./home/product-list", {
    pageTitle: "All Products",
    path: "/product-list",
    prods: products,
  });
};

const getCart = (req, res, next) => {
  res.render("./home/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

const getCheckout = (req, res, next) => {
  res.render("./home/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

const getOrders = (req, res, next) => {
  res.render("./home/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};

module.exports = {
  getIndex: getIndex,
  getProducts: getProducts,
  getCart: getCart,
  getCheckout: getCheckout,
  getOrders: getOrders,
};
