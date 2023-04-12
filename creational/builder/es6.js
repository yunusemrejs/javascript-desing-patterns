class Pizza {
	constructor(builder) {
		this.size = builder.size;
		this.crust = builder.crust;
		this.sauce = builder.sauce;
		this.toppings = builder.toppings;
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
		return new Pizza(this);
	}
}

const pizza = new PizzaBuilder('large').setCrust('thin').setSauce('tomato').addTopping('cheese').addTopping('mushrooms').build();
console.log(pizza);
