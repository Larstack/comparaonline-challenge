const { Product } = require('../coTest');
const { doNotDecrease } = require('../strategy/sellInStrategy');
const {
  increaseNormally,
  decreaseAccordingToTime,
  behaveLikeLegendaryProduct,
  decreaseLikeSuperSaleProduct,
} = require('../strategy/priceStrategy');

class FullCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }
  updatePrice() {
    increaseNormally(this);
  }
}

class SpecialFullCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    decreaseAccordingToTime(this);
  }
}

class MegaCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }
  updatePrice() {
    behaveLikeLegendaryProduct(this);
  }
  updateSellIn() {
    doNotDecrease(this);
  }
}

class SuperSale extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    decreaseLikeSuperSaleProduct(this);
  }
}

module.exports = {
  FullCoverage,
  SpecialFullCoverage,
  MegaCoverage,
  SuperSale,
};
