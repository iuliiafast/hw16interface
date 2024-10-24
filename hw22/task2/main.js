"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var finance_1 = require("./finance");
var principal = 100000; // Сумма кредита
var annualRate = 5; // Годовая ставка в процентах
var months = 12; // Срок кредита в месяцах
var monthlyPayment = finance_1.Finance.LoanCalculator.calculateMonthlyPayment(principal, annualRate, months);
console.log("\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u043F\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u0443: ".concat(monthlyPayment.toFixed(2)));
var income = 50000; // Годовой доход
var taxRate = 15; // Налоговая ставка в процентах
var tax = finance_1.Finance.TaxCalculator.calculateIncomeTax(income, taxRate);
console.log("\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u0434\u043E\u0445\u043E\u0434: ".concat(tax.toFixed(2)));
