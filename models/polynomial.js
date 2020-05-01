const LinkedList = require("./linkedList");
const RE = /(([+-])?((\d+))?x(\^[+-]?(\d+))?|[+-\s](\d+))|([+-]?(\d+))/g;

class Polynomial {
  constructor(expression) {
    this.expression = expression;
    this.polynomialList = this.createPolynomialList();
  }

  match() {
    var arr = []
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

  createPolynomialList(){
    const results = this.match();
    return results.sort(this.compare)
  }
}

module.exports = Polynomial
