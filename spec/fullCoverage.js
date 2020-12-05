const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const { FullCoverage } = require('../src/model/products');

describe('Full Coverage', () => {
  it('current sellIn is greater than 0 and updated price is less than max', () => {
    const carInsurance = new CarInsurance([
      new FullCoverage('Full Coverage', 1, 20),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Full Coverage');
    expect(product.sellIn).equal(0);
    expect(product.price).equal(21);
  });

  it('current sellIn is 0 and updated price is less than max', () => {
    const carInsurance = new CarInsurance([
      new FullCoverage('Full Coverage', 0, 20),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Full Coverage');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(22);
  });

  it('current sellIn is less than 0 and updated price should be greater than max', () => {
    const carInsurance = new CarInsurance([
      new FullCoverage('Full Coverage', -8, 50),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Full Coverage');
    expect(product.sellIn).equal(-9);
    expect(product.price).equal(50);
  });
});
