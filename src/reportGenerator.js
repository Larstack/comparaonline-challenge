const { Product, CarInsurance } = require('./coTest');
const {
  FullCoverage,
  SpecialFullCoverage,
  MegaCoverage,
  SuperSale,
} = require('./model/products');

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new FullCoverage('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverage('Mega Coverage', 0, 80),
  new MegaCoverage('Mega Coverage', -1, 80),
  new SpecialFullCoverage('Special Full Coverage', 15, 20),
  new SpecialFullCoverage('Special Full Coverage', 10, 49),
  new SpecialFullCoverage('Special Full Coverage', 5, 49),
  new SuperSale('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

const printHeader = (i) => {
  console.log(`-------- day ${i} --------`);
  console.log('name, sellIn, price');
};

printHeader(0);
productsAtDayZero.forEach(productPrinter);
console.log('');

for (let i = 1; i <= 30; i += 1) {
  printHeader(i);
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
