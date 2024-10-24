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
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.interestRate = 0.02; // 2% годовых
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into SavingsAccount. New balance: ").concat(this.balance));
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from SavingsAccount. New balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds in SavingsAccount.");
        }
    };
    SavingsAccount.prototype.addInterest = function () {
        var interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log("Added interest to SavingsAccount. New balance: ".concat(this.balance));
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.fee = 1.5; // комиссия за снятие средств
        return _this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into CheckingAccount. New balance: ").concat(this.balance));
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        var totalAmount = amount + this.fee;
        if (this.balance >= totalAmount) {
            this.balance -= totalAmount;
            console.log("Withdrew ".concat(amount, " from CheckingAccount. Fee: ").concat(this.fee, ". New balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds in CheckingAccount.");
        }
    };
    return CheckingAccount;
}(Account));
// Создаем объекты SavingsAccount и CheckingAccount и тестируем работу
var savings = new SavingsAccount();
savings.deposit(100);
savings.addInterest();
savings.withdraw(50);
var checking = new CheckingAccount();
checking.deposit(200);
checking.withdraw(50);
