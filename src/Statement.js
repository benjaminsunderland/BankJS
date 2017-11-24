function Statement(){
  this._logs = []
}

Statement.prototype.seeStatement = function() {
  return this._logs
}

Statement.prototype.storeHistory = function(amount, balance, type) {
  this._logs.push({amount: amount, balance: balance, type: type})
}


module.exports = Statement;
