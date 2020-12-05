const MAX_PRICE = 50;
const MIN_PRICE = 0;

const decrease = (product, multiplier) => {
  const nextPrice = product.price - 1 * multiplier;
  product.price = nextPrice > MIN_PRICE ? nextPrice : MIN_PRICE;
};

//base
const decreaseNormally = (product) => {
  const multiplier = product.sellIn < 0 ? 2 : 1;
  decrease(product, multiplier);
};

//super sale
const decreaseLikeSuperSaleProduct = (product) => {
  const multiplier = product.sellIn < 0 ? 4 : 2;
  decrease(product, multiplier);
};

//mega coverage
const behaveLikeLegendaryProduct = (product) => {};

const increase = (product, multiplier) => {
  const nextPrice = product.price + 1 * multiplier;
  product.price = nextPrice < MAX_PRICE ? nextPrice : MAX_PRICE;
};
//full coverage
const increaseNormally = (product) => {
  const multiplier = product.sellIn < 0 ? 2 : 1;
  increase(product, multiplier);
};

// special FullCoverage
const decreaseAccordingToTime = (product) => {
  if (product.sellIn < 1) {
    product.price = 0;
    return;
  }
  if (product.sellIn < 6) {
    increase(product, 3);
    return;
  }
  if (product.sellIn < 11) {
    increase(product, 2);
    return;
  }
  increaseNormally(product);
};

module.exports = {
  decreaseNormally,
  increaseNormally,
  decreaseAccordingToTime,
  behaveLikeLegendaryProduct,
  decreaseLikeSuperSaleProduct,
};
