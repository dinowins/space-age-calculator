# Space Age Calculator

This application determines your age and life expectancy left for different planets in the solar system.

## Installation

Git clone using https://github.com/dinowins/space-age-calculator.git.

Run npm install to install the environment and dependencies.

Run tests using npm test.

```bash
git clone https://github.com/dinowins/space-age-calculator.git
npm install
npm test
```

## Usage

```javascript
const user = new User("1995-03-10")

user.earthAge() # returns '24'
user.lifeExpEarth() # returns '56'
user.mercuryAge() # returns '100'
user.lifeExpMercury() # returns '233'
```

## Specs
Specification | Input | Output
------------- | ----- | ------
Should calculate input age based on birthdate | 1995-03-10 | 24
Should calculate the Mercury age for the input | 1995-03-10 | 100
Should calculate the Venus age for the input | 1995-03-10 | 38
Should calculate the Mars age for the input | 1995-03-10 | 12
Should calculate the Jupiter age for the input | 1995-03-10 | 2
Should calculate the Earth life expectancy for the input | 1995-03-10 | 56
Should calculate the Mercury life expectancy for the input | 1995-03-10 | 233
Should calculate the Venus life expectancy for the input | 1995-03-10 | 91
Should calculate the Mars life expectancy for the input | 1995-03-10 | 30
Should calculate the Jupiter life expectancy for the input | 1995-03-10 | 4

## Technologies

- JavaScript, Jasmine, Karma, Webpack

## Roadmap

- Add UI for application

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
([MIT](https://choosealicense.com/licenses/mit/)) The Space Age Calculator is licensed under the terms of the MIT license and is available for free.
