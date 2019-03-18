export class User {
  constructor(birthdate) {
		this.birthdate = new Date(birthdate);
	}

	ageInSecs() {
		const todayDate = new Date();
		const ageDiff = todayDate - this.birthdate;
		return ageDiff;
	}

	earthAge() {
		return Math.floor(this.ageInSecs() / 31536000000);
	}

	mercuryAge() {
		return Math.floor(this.ageInSecs() / 31536000000 /.24);
  }

  venusAge() {
    return Math.floor(this.ageInSecs() / 31536000000 / .62);
  }

  marsAge() {
    return Math.floor(this.ageInSecs() / 31536000000 / 1.88);
  }

  jupiterAge() {
    return Math.floor(this.ageInSecs() / 31536000000 / 11.86);
  }
}
