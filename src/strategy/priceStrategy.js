const MAX_PRICE = 50;
const MIN_PRICE = 0;

const decrease = (product, multiplier) => {
  const nextPrice = product.price - 1 * multiplier;
  product.price = nextPrice > MIN_PRICE ? nextPrice : MIN_PRICE;
};

const increase = (product, multiplier) => {
  const nextPrice = product.price + 1 * multiplier;
  product.price = nextPrice < MAX_PRICE ? nextPrice : MAX_PRICE;
};

//Used by normal product
const decreaseNormally = (product) => {
  const multiplier = product.sellIn < 0 ? 2 : 1;
  decrease(product, multiplier);
};

//Used by super sale product
const decreaseLikeSuperSaleProduct = (product) => {
  const multiplier = product.sellIn < 0 ? 4 : 2;
  decrease(product, multiplier);
};

//Used by mega coverage product
const behaveLikeLegendaryProduct = (product) => {};

//Used by full coverage product
const increaseNormally = (product) => {
  const multiplier = product.sellIn < 0 ? 2 : 1;
  increase(product, multiplier);
};

//Used by special full coverage product
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
