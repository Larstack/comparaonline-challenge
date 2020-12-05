const sellInStrategy = require('./strategy/sellInStrategy');
const decreaseLinearly = sellInStrategy.decreaseLinearly;

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class ProductWithBehavior extends Product {
  constructor(
    name,
    sellIn,
    price,
    updatePrice,
    updateSellIn = decreaseLinearly
  ) {
    super(name, sellIn, price);
    this.updatePrice = updatePrice;
    this.updateSellIn = updateSellIn;
  }

  updatePrice() {
    this.updatePrice(this);
  }

  updateSellIn() {
    this.updateSellIn(this);
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
  ProductWithBehavior,
  CarInsurance,
};
