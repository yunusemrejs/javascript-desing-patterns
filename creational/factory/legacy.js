// Pizzaları temsil eden sınıfımız
function Pizza(name, toppings) {
  this.name = name;
  this.toppings = toppings;

  // Pizza'nın özelliklerini yazdıralım
  this.describe = function() {
    console.log('Pizza: ' + this.name);
    console.log('Toppings: ' + this.toppings.join(', '));
  }
}

// Factory sınıfımız
function PizzaFactory() {
  // Pizza üretmek için kullanacağımız metod
  this.createPizza = function(name, toppings) {
    return new Pizza(name, toppings);
  }
}

// Pizza dükkanımızda sipariş alalım
var pizzaFactory = new PizzaFactory();
var customerOrder = pizzaFactory.createPizza('Pepperoni', ['pepperoni', 'mozarella']);

// Siparişi yazdıralım
customerOrder.describe();
