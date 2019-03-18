import { User } from "./../src/business.js"

describe('User', function() {

  const user = new User("1995-03-10");

  it("Should calculate input age based on birthdate", function(){
    expect(user.earthAge()).toEqual(24);
  });

  it("Should calculate the Mercury age for the input", function(){
    expect(user.mercuryAge()).toEqual(100);
  });

  it("Should calculate the Venus age for the input", function() {
    expect(user.venusAge()).toEqual(38);
  });

  it("Should calculate the Mars age for the input", function() {
    expect(user.marsAge()).toEqual(12);
  })
});
