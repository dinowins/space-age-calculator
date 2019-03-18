export class User {
  constructor(birthdate) {
		this.birthdate = new Date(birthdate);
    this.lifeExpectancy = 80;
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

  lifeExpEarth() {
    return this.lifeExpectancy - this.earthAge();
  }

  lifeExpMercury() {
    return Math.floor((this.lifeExpectancy / .24) - this.mercuryAge());
  }

  lifeExpVenus() {
    return Math.floor((this.lifeExpectancy / .62) - this.venusAge());
  }
}
