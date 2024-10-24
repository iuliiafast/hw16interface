// main.ts

import { Finance } from './finance';

const principal = 100000; // Сумма кредита
const annualRate = 5;     // Годовая ставка в процентах
const months = 12;        // Срок кредита в месяцах

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(principal, annualRate, months);
console.log(`Ежемесячный платеж по кредиту: ${monthlyPayment.toFixed(2)}`);

const income = 50000;     // Годовой доход
const taxRate = 15;       // Налоговая ставка в процентах

const tax = Finance.TaxCalculator.calculateIncomeTax(income, taxRate);
console.log(`Налог на доход: ${tax.toFixed(2)}`);
