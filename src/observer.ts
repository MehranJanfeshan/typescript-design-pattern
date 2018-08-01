interface Subject {
  registerObserver(o: Observer): void

  removeObserver(o: Observer): void

  notifyObservers(): void
}

interface Observer {
  update(temperature: number): void

}

class WeatherStation implements Subject {
  private temperature: number
  private observers: Observer[] = []

  public setTemperature(temp: number) {
    console.log('weatherStation: new temperature measurement: ' + temp)
    this.temperature = temp
    this.notifyObservers()
  }

  public registerObserver(o: Observer) {
    this.observers.push(o)
  }

  public removeObserver(o: Observer) {
    let index = this.observers.lastIndexOf(o)
    this.observers.splice(index, 1)
  }

  public notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature)
    }
  }
}


class TemperatureDisplay implements Observer {
  private subject: Subject

  constructor(weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }

  public update(temperature: number) {
    console.log('TemperatureDisplay: I need to update my display.')
  }
}

class Fan implements Observer {
  private subject: Subject

  constructor(weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }

  public update(temperature: number) {
    if (temperature > 25) {
      console.log('its hot, I am turning myself on')
    } else {
      console.log('its cool, I am turning myself off')
    }
  }
}

let weatherStation = new WeatherStation()

let tempDisplay = new TemperatureDisplay(weatherStation)

let fan = new Fan(weatherStation)

weatherStation.setTemperature(20)
weatherStation.setTemperature(30)

