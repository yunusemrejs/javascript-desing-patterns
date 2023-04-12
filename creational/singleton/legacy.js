function Calculator() {
  if (Calculator.instance) {
    return Calculator.instance;
  }
  
  Calculator.instance = this;

  this.add = function(x, y) { return x + y };
  this.subtract = function(x, y) { return x - y };
  this.multiply = function(x, y) { return x * y };
  this.divide = function(x, y) { return x / y };

  return this;
}

var calculator1 = new Calculator();
var calculator2 = new Calculator();

console.log(calculator1 === calculator2); // true

console.log(calculator1.add(2, 3)); // 5
console.log(calculator2.multiply(4, 5)); // 20
