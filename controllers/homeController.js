const Product = require("../models/productModel");

// const products = Product.fetchAllProducts();

const getIndex = (req, res, next) => {
  //   res.render("./home/index", {
  //     pageTitle: "Home",
  //     path: "/",
  //     prods: products,
  //   });

  Product.fetchAllProducts((products) => {
    res.render("./home/index", {
      pageTitle: "Home",
      path: "/",
      prods: products,
    });
  });
};

const getProducts = (req, res, next) => {
  //   res.render("./home/product-list", {
  //     pageTitle: "All Products",
  //     path: "/product-list",
  //     prods: products,
  //   });

  Product.fetchAllProducts((products) => {
    res.render("./home/product-list", {
      pageTitle: "All Products",
      path: "/product-list",
      prods: products,
    });
  });
};

const getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  //   const product = Product.fetchProductById(prodId);
  //   res.render("./home/product-detail", {
  //     pageTitle: product.title,
  //     path: "/products",
  //     product: product,
  //   });

  Product.fetchProductById(prodId, (product) => {
    res.render("./home/product-detail", {
      pageTitle: product.title,
      path: "/products",
      product: product,
    });
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
  getProduct: getProduct,
  getCart: getCart,
  getCheckout: getCheckout,
  getOrders: getOrders,
};
