function Account(){
  this._balance = 0
}

Account.prototype.deposit = function(amount) {
  this._balance += amount
}

Account.prototype.balance = function() {
  return this._balance
}

module.exports = Account;
