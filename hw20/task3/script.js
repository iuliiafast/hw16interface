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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        var _this = _super.call(this, make, model) || this;
        _this.type = type;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
// Пример использования
var vehicle = new Vehicle("Toyota", "Corolla");
console.log(vehicle.make, vehicle.model); // "Toyota", "Corolla"
var motorcycle = new Motorcycle("Harley-Davidson", "Sportster", "Cruiser");
console.log(motorcycle.make, motorcycle.model, motorcycle.type); // "Harley-Davidson", "Sportster", "Cruiser"
