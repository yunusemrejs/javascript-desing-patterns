class Calculator {
  static instance;

  constructor() {
    if (Calculator.instance) {
      return Calculator.instance;
    }
    
    Calculator.instance = this;

    this.add = (x, y) => x + y;
    this.subtract = (x, y) => x - y;
    this.multiply = (x, y) => x * y;
    this.divide = (x, y) => x / y;


    return this;
  }
}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

console.log(calculator1 === calculator2); // true

console.log(calculator1.add(2, 3)); // 5
console.log(calculator2.multiply(4, 5)); // 20
