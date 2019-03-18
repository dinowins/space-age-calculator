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
  });

  it("Should calculate the Jupiter age for the input", function() {
    expect(user.jupiterAge()).toEqual(2);
  });

  it("Should calculate the Earth life expectancy for the input", function() {
    expect(user.lifeExpEarth()).toEqual(56);
  });

  it("Should calculate the Mercury life expectancy for the input", function() {
    expect(user.lifeExpMercury()).toEqual(233);
  });

  it("Should calculate the Venus life expectancy for the input", function() {
    expect(user.lifeExpVenus()).toEqual(91);
  });

  it("Should calculate the Mars life expectancy for the input", function() {
    expect(user.lifeExpMars()).toEqual(30);
  });
});
