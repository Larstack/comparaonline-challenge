const { decreaseNormally } = require('./strategy/priceStrategy');
const { decreaseLinearly } = require('./strategy/sellInStrategy');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    decreaseNormally(this);
  }

  updateSellIn() {
    decreaseLinearly(this);
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach((product) => {
      product.updateSellIn();
      product.updatePrice();
    });
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
