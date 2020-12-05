const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const { SpecialFullCoverage } = require('../src/model/products');

describe('Special Full Coverage', () => {
  it('updated sellIn is greater than 10 and updated price is less than max', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 12, 20),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(11);
    expect(product.price).equal(21);
  });

  it('updated sellIn is greater than 5 and <=10 and updated price is less than max', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 11, 30),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(10);
    expect(product.price).equal(32);
  });

  it('updated sellIn is greater than 5 and <=10 and updated price should be greater than max', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 11, 49),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(10);
    expect(product.price).equal(50);
  });

  it('updated sellIn is greater than 0 and <=5 and updated price is less than max', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 6, 30),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(5);
    expect(product.price).equal(33);
  });

  it('updated sellIn is greater than 0 and <=5 and updated price should be greater than max', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 6, 49),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(5);
    expect(product.price).equal(50);
  });

  it('updated sellIn is 0 and price is greater than 0', () => {
    const carInsurance = new CarInsurance([
      new SpecialFullCoverage('Special Full Coverage', 1, 50),
    ]);
    const product = carInsurance.updatePrice()[0];
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(0);
    expect(product.price).equal(0);
  });
});
