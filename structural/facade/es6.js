class StockControl {
  check(productId, quantity) {
    return true;
  }
}

class Payment {
  makePayment(amount) {
    return true;
  }
}

class Shipping {
  shipTo(address) {
    return true;
  }
}

class OrderFacade {
  constructor() {
    this.stockControl = new StockControl();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  placeOrder(productId, quantity, amount, address) {
    const stockCheck = this.stockControl.check(productId, quantity);
    if (!stockCheck) {
      console.log('Sorry, the product is out of stock.');
      return false;
    }

    const paymentMade = this.payment.makePayment(amount);
    if (!paymentMade) {
      console.log('Payment failed.');
      return false;
    }

    const shipped = this.shipping.shipTo(address);
    if (!shipped) {
      console.log('Shipping failed.');
      return false;
    }

    console.log('Order placed successfully.');
    return true;
  }
}

const order = new OrderFacade();
const productId = 123;
const quantity = 2;
const amount = 100;
const address = 'New York, USA';

order.placeOrder(productId, quantity, amount, address);
