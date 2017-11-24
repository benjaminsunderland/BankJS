function Statement(){
  this._statement = []
}

Statement.prototype.seeStatement = function() {
  return this._statement
}

module.exports = Statement;
