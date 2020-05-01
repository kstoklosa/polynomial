const PolynomialLinkedList = require("./polynomialLinkedList");
const RE = /(([+-])?((\d+))?x(\^[+-]?(\d+))?|[+-\s](\d+))|([+-]?(\d+))/g;

class Polynomial {
  constructor(expression) {
    this.expression = expression;
    this.polynomialList = this.createPolynomialList();
  }

  match() {
    let arr = []
    const matched = this.expression.match(RE);
    for (const match of matched) {
      const vals = match.split('^');
      const isX = vals[0].includes("x");
      arr.push({
        coefficient: parseFloat(vals[0]) || 1,
        power: vals[1] != null ? parseFloat(vals[1]) : (isX ? 1 : 0)
      })
    }
    return arr;
  }

  compare(a, b) {
    let comparison = 0;
    if (a.power > b.power) {
      comparison = 1;
    } else if (a.power < b.power) {
      comparison = -1;
    }
    return comparison * -1;
  }

  add(polynomial) {
    let current1 = this.polynomialList.head;
    let current2 = polynomial.polynomialList.head;
    let result = new PolynomialLinkedList();

    while (current1 && current2) {
      if (current1.power > current2.power) {
        result.push(current1.coefficient, current1.power)
        current1 = current1.next;
      } else if (current1.power < current2.power) {
        result.push(current2.coefficient, current2.power)
        current2 = current2.next;
      } else {
        result.push((current1.coefficient + current2.coefficient), current1.power)
        current1 = current1.next
        current2 = current2.next
      }
    }
    while (current1 || current2) {
      if (current1) {
        result.push(current1.coefficient, current1.power)
        current1 = current1.next;
      }
      if (current2) {
        result.push(current2.coefficient, current2.power)
        current2 = current2.next;
      }
    }
    this.polynomialList = result;
    this.expression = this.createPolynomialString();
  }

  createPolynomialList(){
    const results = this.match();
    const resultsSorted = results.sort(this.compare);
    const polynomialList = new PolynomialLinkedList();
    for (const result of resultsSorted) {
      polynomialList.push(result.coefficient, result.power);
    }
    return polynomialList;
  }

  createPolynomialString(){
    let current = this.polynomialList.head;
    let result = "";
    while (current !== null) {
      if (current.power === 0) {
        result += `${current.coefficient}`
      } else if(current.power === 1) {
        result += `${current.coefficient}x`
      } else {
        result += `${current.coefficient}x^${current.power}`
      }
      current = current.next;
      if (current !== null && current.coefficient > 0) {
        result += "+"
      }
    }
    return result
  }
}

module.exports = Polynomial
