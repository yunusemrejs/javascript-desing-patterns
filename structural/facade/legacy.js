function StockControl() {
  this.check = function(productId, quantity) {
    return true;
  }
}

function Payment() {
  this.makePayment = function(amount) {
    return true;
  }
}

function Shipping() {
  this.shipTo = function(address) {
    return true;
  }
}

function OrderFacade() {
  this.stockControl = new StockControl();
  this.payment = new Payment();
  this.shipping = new Shipping();

  this.placeOrder = function(productId, quantity, amount, address) {
    var stockCheck = this.stockControl.check(productId, quantity);
    if (!stockCheck) {
      console.log('Sorry, the product is out of stock.');
      return false;
    }

    var paymentMade = this.payment.makePayment(amount);
    if (!paymentMade) {
      console.log('Payment failed.');
      return false;
    }

    var shipped = this.shipping.shipTo(address);
    if (!shipped) {
      console.log('Shipping failed.');
      return false;
    }

    console.log('Order placed successfully.');
    return true;
  }
}

var order = new OrderFacade();
var productId = 123;
var quantity = 2;
var amount = 100;
var address = 'New York, USA';

order.placeOrder(productId, quantity, amount, address);
