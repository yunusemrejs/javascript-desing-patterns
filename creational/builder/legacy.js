class Pizza {
	constructor(size, crust, sauce, toppings) {
		this.size = size;
		this.crust = crust;
		this.sauce = sauce;
		this.toppings = toppings;
	}
}

class PizzaBuilder {
	constructor(size) {
		this.size = size;
		this.crust = null;
		this.sauce = null;
		this.toppings = [];
	}

	setCrust(crust) {
		this.crust = crust;
		return this;
	}

	setSauce(sauce) {
		this.sauce = sauce;
		return this;
	}

	addTopping(topping) {
		this.toppings.push(topping);
		return this;
	}

	build() {
		return new Pizza(this.size, this.crust, this.sauce, this.toppings);
	}
}

const pizza = new PizzaBuilder('large').setCrust('thin').setSauce('tomato').addTopping('cheese').addTopping('mushrooms').build();
console.log(pizza);
