const assert = require('chai').assert;
const Polynomial = require('../../models/polynomial');
const PolynomialLinkedList = require('../../models/polynomialLinkedList');

describe('Polynomial', function () {
  describe("initialization", function () {
    it("initializes Polynomial with expression", function () {
      const expression = "2x^6+7x-4";
      const p = new Polynomial(expression);
      assert.equal(p.expression, expression);
    });

    it("initializes Polynomial with LinkedList", function () {
      const expression = "2x^6+7x-4";
      const p = new Polynomial(expression);
      assert.instanceOf(p.polynomialList, PolynomialLinkedList);
    });
  });

  describe("#match()", function () {
    const p1 = new Polynomial("2x^3-3x^-2");
    const r1 = [{coefficient: 2, power: 3}, {coefficient: -3, power: -2}]
    it("creates array", function () {
      assert.deepEqual(p1.match(), r1);
    });
  });

  describe("#add()", function () {
    const p1 = new Polynomial("2x^3-3x^-2");
    const p2 = new Polynomial("5x^-2+3x+1");
    it("adds polynomials", function () {
      p1.add(p2);
      assert.equal(p1.expression, "2x^3+3x+1+2x^-2")
    });
  });
})

