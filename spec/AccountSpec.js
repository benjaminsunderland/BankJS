var Account = require("../src/Account.js")
var Statement = require("../src/Statement.js")

'use strict';

describe('Account',function(){
  var account;
  beforeEach(function(){
    statement = new Statement
    account = new Account(statement);
  });
  it('is able for a user to deposit', function(){
    account.deposit(40)
    expect(account.balance()).toEqual(40)
  });
  it('is able for a user to withdraw', function() {
    account.deposit(40)
    account.withdraw(20)
    expect(account.balance()).toEqual(20)
  });
  it('is able for a user to check their balance', function() {
    account.deposit(20)
    expect(account.balance()).toEqual(20)
  });
});
