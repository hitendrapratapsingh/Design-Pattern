class Car {
  drive() { console.log("Driving a car"); }
}
class Bike {
  drive() { console.log("Riding a bike"); }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") return new Car();
    if (type === "bike") return new Bike();
    throw new Error("Invalid vehicle type");
  }
}

// Usage
const vehicle = VehicleFactory.createVehicle("bike");
vehicle.drive();  // Driving a car
