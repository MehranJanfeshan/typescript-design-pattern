interface IPhone {
  userLightning(): void
}

interface Android {
  userMicroUSB(): void
}

class iPhone7 implements IPhone {
  userLightning(): void {
    console.log('This is iPhone')
  }
}

class GooglePixel implements Android {
  userMicroUSB(): void {
    console.log('This is Android')
  }
}

class convertMicroUSBToLightning {
  iphoneDevice: iPhone7

  constructor(iphone: iPhone7) {
    this.iphoneDevice = iphone
  }

  public useMicroUSB() {
    console.log('I am being converted to lightning')
    this.iphoneDevice.userLightning()
  }
}

let testIphone = new iPhone7
let convertor = new convertMicroUSBToLightning(testIphone)

convertor.useMicroUSB()


