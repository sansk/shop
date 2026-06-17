// Later replaced by db data, Now read from File
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json",
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

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString(); // generate a random id for the product
    // Read from file and then write to file
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // End of File reads

    //products.push(this);
  }

  //   static fetchAllProducts() {
  //     return products;
  //   }

  //   static fetchProductById(id) {
  //     return products.find((p) => p.id === id);
  //   }

  // File reads
  static fetchAllProducts(cb) {
    getProductsFromFile(cb);
  }

  static fetchProductById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
  //End of File reads
}

module.exports = Product;
