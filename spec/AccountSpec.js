var Account = require("../src/Account.js")

'use strict';

describe('Account',function(){
  var account;
  beforeEach(function(){
    account = new Account();
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
});
