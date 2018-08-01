interface Subject {
  registerObserver(o: ObserverPattern): void

  removeObserver(o: ObserverPattern): void

  notifyObservers(): void
}

interface ObserverPattern {
  update(temperature: number): void

}

class WeatherStation implements Subject {
  private temperature: number
  private observers: ObserverPattern[] = []

  public setTemperature(temp: number) {
    console.log('weatherStation: new temperature measurement: ' + temp)
    this.temperature = temp
    this.notifyObservers()
  }

  public registerObserver(o: ObserverPattern) {
    this.observers.push(o)
  }

  public removeObserver(o: ObserverPattern) {
    let index = this.observers.lastIndexOf(o)
    this.observers.splice(index, 1)
  }

  public notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature)
    }
  }
}


class TemperatureDisplay implements ObserverPattern {
  private subject: Subject

  constructor(weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObserver(this)
  }

  public update(temperature: number) {
    console.log('TemperatureDisplay: I need to update my display.')
  }
}

class Fan implements ObserverPattern {
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

