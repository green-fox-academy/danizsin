class Station {
  gasAmount: number;
  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += this.gasAmount;
  }

}

class Car {

  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}