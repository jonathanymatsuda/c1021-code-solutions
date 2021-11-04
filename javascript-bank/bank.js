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
    if ((Number.isInteger(number)) && (this.accounts[account].number === number)) {
      return this.accounts[account];
    } else if ((Number.isInteger(number)) && (this.accounts[account].number !== number)) {
      return null;
    }
  }
};

Bank.prototype.getTotalAssets = function () {};
