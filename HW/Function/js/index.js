// Написати функцію конструктор "Банківський рахунок" (Account), який містить:
// Номер рахунку
// Розмір коштів на рахунку
// Назва валюти рахунку (рублі, гривні, евро тощо), для позначення якої можна скористатись одним символом: R, G, E, $ тощо
// Забезпечити можливість:
// Відкривати рахунок та первинно вносити гроші на рахунок
// Знімати гроші з рахунку
// Докладати гроші на рахунок

function Account(Account_number, amount, currency) {
  this.Account_number = Account_number;
  this.amount = amount;
  this.currency = currency;

  this.ShowAccount = function() {
    console.log("Номер рахунку - ", this.Account_number);
    console.log("Розмір коштів на рахунку - ", this.amount);
    console.log("Назва валюти рахунку - ", this.currency);
  };
  this.WithdrawMoney = function(sum) {
    while (true) {
      if (sum < this.amount) {
        this.amount -= sum;
        this.ShowAccount();
        break;
      } else {
        console.log("Недостатньо коштів");
        sum = parseInt(prompt("Введіть суму яку ви хочете зняти з рахунку"));
      }
    }
  };
  this.PushMoney = function(sum) {
    while (true) {
      if (sum > 0) {
        this.amount += sum;
        this.ShowAccount();
        break;
      } else {
        console.log("Помилка");
        sum = parseInt(
          prompt("Введіть суму яку ви хочете покласти на рахунок")
        );
      }
    }
  };
}

let AccountFirs = new Account(1, 1500, "$");
AccountFirs.ShowAccount();
AccountFirs.WithdrawMoney(
  parseInt(prompt("Введіть суму яку ви хочете зняти з рахунку"))
);

AccountFirs.PushMoney(
  parseInt(prompt("Введіть суму яку ви хочете покласти на рахунок"))
);
