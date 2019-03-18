export class User {
  constructor(userBirthDate) {
    this.birthdate = new Date(userBirthDate);
    this.lifeExpectancy = 80;
  }

  getEarthAge() {
    const todayDate = new Date();
    const ageDiff = todayDate - this.birthdate;
    return Math.floor(ageDiff / 31536000000);
  }








}
