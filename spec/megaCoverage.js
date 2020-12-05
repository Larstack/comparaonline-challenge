const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const { MegaCoverage } = require('../src/model/products');

describe('Super Sale', () => {
  it('sellIn and price do not change', () => {
    const carInsurance = new CarInsurance([
      new MegaCoverage('Super Sale', 1, 80),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(1);
    expect(product.price).equal(80);
  });
});
