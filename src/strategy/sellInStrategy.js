const decreaseLinearly = (product) => {
  product.sellIn--;
};

const doNotDecrease = (product) => {};

module.exports = {
  decreaseLinearly,
  doNotDecrease,
};
