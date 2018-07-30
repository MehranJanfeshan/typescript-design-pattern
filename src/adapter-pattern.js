var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.userLightning = function () {
        console.log('This is iPhone');
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.userMicroUSB = function () {
        console.log('This is Android');
    };
    return GooglePixel;
}());
var convertMicroUSBToLightning = /** @class */ (function () {
    function convertMicroUSBToLightning(iphone) {
        this.iphoneDevice = iphone;
    }
    convertMicroUSBToLightning.prototype.useMicroUSB = function () {
        console.log('I am being converted to lightning');
        this.iphoneDevice.userLightning();
    };
    return convertMicroUSBToLightning;
}());
var testIphone = new iPhone7;
var convertor = new convertMicroUSBToLightning(testIphone);
convertor.useMicroUSB();
