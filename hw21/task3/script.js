var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () {
        console.log("Washing Machine is now ON.");
    };
    WashingMachine.prototype.turnOff = function () {
        console.log("Washing Machine is now OFF.");
    };
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerator.prototype.turnOn = function () {
        console.log("Refrigerator is now ON.");
    };
    Refrigerator.prototype.turnOff = function () {
        console.log("Refrigerator is now OFF.");
    };
    return Refrigerator;
}(Appliance));
// Создаем массив типа Appliance[]
var appliances = [new WashingMachine(), new Refrigerator()];
// Вызываем методы turnOn() и turnOff() для каждого элемента массива
appliances.forEach(function (appliance) {
    appliance.turnOn();
    appliance.turnOff();
});
