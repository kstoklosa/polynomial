const assert = require('chai').assert;
const Polynomial = require('../../models/polynomial');

describe('Polynomial', function () {
  it('initializes Polynomial with expression', function () {
    const expression = "2x^6+7x-4";
    const p = new Polynomial(expression);
    assert.equal(p.expression, expression);
  });
});


