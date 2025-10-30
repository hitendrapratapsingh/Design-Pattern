class Order {
  constructor() {
    this.state = new PendingState(this);
  }

  setState(state) {
    this.state = state;
  }

  next() {
    this.state.next();
  }

  cancel() {
    this.state.cancel();
  }
}

class PendingState {
  constructor(order) {
    this.order = order;
  }
  next() {
    console.log("Order shipped!");
    this.order.setState(new ShippedState(this.order));
  }
  cancel() {
    console.log("Order cancelled.");
  }
}

class ShippedState {
  constructor(order) {
    this.order = order;
  }
  next() {
    console.log("Order delivered!");
  }
  cancel() {
    console.log("Cannot cancel, already shipped!");
  }
}

// Usage
const order = new Order();
order.next(); // Order shipped!
order.cancel(); // Cannot cancel, already shipped!
