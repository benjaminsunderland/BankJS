var Statement = require("../src/Statement.js")

'use strict';

describe('Statement',function(){
  var statement;
  beforeEach(function(){
    statement = new Statement();
  });
  it("is able for a user to see their statement", function() {
    expect(statement.seeStatement()).toEqual([])
  });
  it("is able for the statement to store the history", function() {
    statement.storeHistory(40, 40, "Deposit")
    expect(statement.seeStatement()).toEqual([{amount: 40, balance: 40, type: "Deposit"}])
  });
});
