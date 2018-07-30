abstract class Car {
  public description: string

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number
}

class ModelS extends Car {
  public description = 'Model S'

  public cost(): number {
    return 73000
  }
}

class ModelX extends Car {
  public description = 'Model X'

  public cost(): number {
    return 77000
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car

  public abstract getDescription(): string

  public abstract cost(): number
}

class EnhanceAutoPilot extends CarOptions {
  decoratedCar: Car

  constructor(car: Car) {
    super()
    this.decoratedCar = car
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhances AutoPilot'
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000

  }
}


class RefacingSeats extends CarOptions {
  decoratedCar: Car

  constructor(car: Car) {
    super()
    this.decoratedCar = car
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Refacing Seats'
  }

  public cost(): number {
    return this.decoratedCar.cost() + 400

  }
}

let myTesla = new ModelS()
myTesla = new EnhanceAutoPilot(myTesla)

console.log(myTesla.getDescription())
console.log(myTesla.cost())