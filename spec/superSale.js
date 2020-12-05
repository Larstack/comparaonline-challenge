const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const { SuperSale } = require('../src/model/products');

describe('Super Sale', () => {
  it('current sellIn is >= 0 and price is greater than 0', () => {
    const carInsurance = new CarInsurance([new SuperSale('Super Sale', 1, 20)]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(0);
    expect(product.price).equal(18);
  });

  it('updated sellIn is less than 0 and updated price is greater than 0', () => {
    const carInsurance = new CarInsurance([new SuperSale('Super Sale', 0, 20)]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(16);
  });

  it('current sellIn is less than 0 and updated price should be less than 0', () => {
    const carInsurance = new CarInsurance([new SuperSale('Super Sale', -8, 0)]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(-9);
    expect(product.price).equal(0);
  });
});
