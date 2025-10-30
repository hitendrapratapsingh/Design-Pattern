class Payment {
  pay() {}
}

class PayPal extends Payment {
  pay() { console.log("Paid via PayPal"); }
}

class Stripe extends Payment {
  pay() { console.log("Paid via Stripe"); }
}

class PaymentFactory {
  static create(type) {
    switch (type) {
      case "paypal": return new PayPal();
      case "stripe": return new Stripe();
      default: throw new Error("Unknown payment type");
    }
  }
}

const payment = PaymentFactory.create("paypal");
payment.pay();
