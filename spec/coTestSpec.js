const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;

describe('CoTest', () => {
  it('products list is empty', () => {
    const carInsurance = new CarInsurance();
    const product = carInsurance.updatePrice();
    expect(product, []);
  });
});
