const products = []; // later replaced by db data

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}

module.exports = Product;
