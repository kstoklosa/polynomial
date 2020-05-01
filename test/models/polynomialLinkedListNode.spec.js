const assert = require('chai').assert;
const PolynomialLinkedListNode = require('../../models/polynomialLinkedListNode');

describe('PolynomialLinkedListNode', function () {
  describe("initialization", function () {
    it("initializes PolynomialLinkedListNode with coefficient and power", function () {
      const coefficient = 2;
      const power = -2;
      const p = new PolynomialLinkedListNode(coefficient, power);
      assert.equal(p.coefficient, coefficient);
      assert.equal(p.power, power);
    });
  });
})
