import { User } from "./../src/business.js"

describe('User', function() {

  const user = new User("1995-03-10");

  it("Should calculate input age based on birthdate", function(){
    expect(user.earthAge()).toEqual(24);
  });

  it("Should calculate the Mercury age for the input age", function(){
    expect(user.mercuryAge()).toEqual(100);
  });
});
