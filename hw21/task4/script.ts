abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  balance: number = 0;
  interestRate: number = 0.02; // 2% годовых

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into SavingsAccount. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from SavingsAccount. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds in SavingsAccount.");
    }
  }

  addInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Added interest to SavingsAccount. New balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  balance: number = 0;
  fee: number = 1.5; // комиссия за снятие средств

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into CheckingAccount. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const totalAmount = amount + this.fee;
    if (this.balance >= totalAmount) {
      this.balance -= totalAmount;
      console.log(`Withdrew ${amount} from CheckingAccount. Fee: ${this.fee}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds in CheckingAccount.");
    }
  }
}

// Создаем объекты SavingsAccount и CheckingAccount и тестируем работу
const savings = new SavingsAccount();
savings.deposit(100);
savings.addInterest();
savings.withdraw(50);

const checking = new CheckingAccount();
checking.deposit(200);
checking.withdraw(50);
