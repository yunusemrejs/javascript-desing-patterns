// Pizzaları temsil eden sınıfımız
class Pizza {
  constructor(name, toppings) {
    this.name = name;
    this.toppings = toppings;
  }

  // Pizza'nın özelliklerini yazdıralım
  describe() {
    console.log(`Pizza: ${this.name}`);
    console.log(`Toppings: ${this.toppings.join(', ')}`);
  }
}

// Factory sınıfımız
class PizzaFactory {
  // Pizza üretmek için kullanacağımız metod
  createPizza(name, toppings) {
    return new Pizza(name, toppings);
  }
}

// Pizza dükkanımızda sipariş alalım
const pizzaFactory = new PizzaFactory();
const customerOrder = pizzaFactory.createPizza('Pepperoni', ['pepperoni', 'mozarella']);

// Siparişi yazdıralım
customerOrder.describe();
