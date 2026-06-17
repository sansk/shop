// Later replaced by db data, Now read from File
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json",
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
// End of File reads

class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    getProductsFromFile((cart) => {
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id,
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty++;
      } else {
        updatedProduct = { id: id, qty: 1 };
      }

      updatedCart.products = [...cart.products];
      updatedCart.totalPrice += productPrice * updatedProduct.qty;
      if (existingProduct) {
        updatedCart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedCart.products.push(updatedProduct);
      }
      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }
}

module.exports = Cart;
