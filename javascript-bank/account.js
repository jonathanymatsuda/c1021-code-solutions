/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    var newWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdraw);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var balance = 0;
  for (var transaction = 0; transaction < this.transactions.length; transaction++) {
    if (this.transactions.type === 'deposit') {
      balance = balance + 77;
    } else {
      balance = balance - this.amount;
    }
  }
  return balance;
};
