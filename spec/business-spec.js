import { User } from "./../src/business.js"

describe('User', function() {
  const input = new User("1995-03-10");

  it("Should calculate input age based on birthdate", function() {
    expect(input.getEarthAge()).toEqual(24);
  });
});
