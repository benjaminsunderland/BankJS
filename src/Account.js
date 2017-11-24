var Statement = require("./Statement.js")

function Account(statement = new Statement){
  this._statement = statement
  this._balance = 0
}

Account.prototype.deposit = function(amount) {
  this._balance += amount
}

Account.prototype.withdraw = function(amount) {
  this._balance -= amount
}

Account.prototype.balance = function() {
  return this._balance
}

module.exports = Account;
