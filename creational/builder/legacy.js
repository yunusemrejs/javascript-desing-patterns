// Pizza sınıfı
function Pizza(builder) {
	this.size = builder.size;
	this.crust = builder.crust;
	this.sauce = builder.sauce;
	this.toppings = builder.toppings;
}

function PizzaBuilder(size) {
	this.size = size;
	this.crust = null;
	this.sauce = null;
	this.toppings = [];
}

PizzaBuilder.prototype.setCrust = function(crust) {
	this.crust = crust;
	return this;
}

PizzaBuilder.prototype.setSauce = function(sauce) {
	this.sauce = sauce;
	return this;
}

PizzaBuilder.prototype.addTopping = function(topping) {
	this.toppings.push(topping);
	return this;
}

PizzaBuilder.prototype.build = function() {
	return new Pizza(this);
}

function PizzaDirector(builder) {
	this.builder = builder;
}

PizzaDirector.prototype.buildMargherita = function() {
	return this.builder.setCrust('thin').setSauce('tomato').addTopping('cheese').build();
}

PizzaDirector.prototype.buildPepperoni = function() {
	return this.builder.setCrust('thick').setSauce('tomato').addTopping('cheese').addTopping('pepperoni').build();
}

PizzaDirector.prototype.buildVegetarian = function() {
	return this.builder.setCrust('thick').setSauce('pesto').addTopping('cheese').addTopping('mushrooms').addTopping('olives').build();
}

var builder = new PizzaBuilder('large');
var director = new PizzaDirector(builder);

var margherita = director.buildMargherita();
console.log(margherita);
