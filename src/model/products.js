const coTest = require('../coTest');
const Product = coTest.ProductWithBehavior;
const { doNotDecrease } = require('../strategy/sellInStrategy');

const {
  decreaseNormally,
  increaseNormally,
  decreaseAccordingToTime,
  behaveLikeLegendaryProduct,
  decreaseLikeSuperSaleProduct,
} = require('../strategy/priceStrategy');

class Normal extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price, decreaseNormally);
  }
}

class FullCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price, increaseNormally);
  }
}

class SpecialFullCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price, decreaseAccordingToTime);
  }
}

class MegaCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price, behaveLikeLegendaryProduct, doNotDecrease);
  }
}

class SuperSale extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price, decreaseLikeSuperSaleProduct);
  }
}

module.exports = {
  Normal,
  FullCoverage,
  SpecialFullCoverage,
  MegaCoverage,
  SuperSale,
};
