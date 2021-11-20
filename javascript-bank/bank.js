/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((Number.isInteger(balance)) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var account = 0; account < this.accounts.length; account++) {
    if (this.accounts[account].number === number) {
      return this.accounts[account];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var account = 0; account < this.accounts.length; account++) {
    if (this.accounts.length === 0) {
      return 0;
    } else {
      totalBalance += this.accounts[account].getBalance();
    }
  }
  return totalBalance;
};
