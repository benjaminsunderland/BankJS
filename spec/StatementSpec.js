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
});
