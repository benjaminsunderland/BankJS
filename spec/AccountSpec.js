var Account = require("../src/Account.js")

'use strict';

describe('Account',function(){
  var account;
  beforeEach(function(){
    account = new Account();
  });
  it('is able to deposit', function(){
    account.deposit(40)
    expect(account.balance()).toEqual(40)
  });
});
