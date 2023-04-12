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

class PizzaDirector {
	constructor(builder) {
		this.builder = builder;
	}

	buildMargherita() {
		return this.builder.setCrust('thin').setSauce('tomato').addTopping('cheese').build();
	}

	buildPepperoni() {
		return this.builder.setCrust('thick').setSauce('tomato').addTopping('cheese').addTopping('pepperoni').build();
	}

	buildVegetarian() {
		return this.builder.setCrust('thick').setSauce('pesto').addTopping('cheese').addTopping('mushrooms').addTopping('olives').build();
	}
}


const builder = new PizzaBuilder('large');
const director = new PizzaDirector(builder);

const margherita = director.buildMargherita();
console.log(margherita);
