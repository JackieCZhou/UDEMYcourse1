'use strict';

// arguments object is no longer bound with arrow function
// this keyword also no longer bound


var add = function add(a, b) {
    console.log(arguments); //prints out all arguments in a function regardless of whats being returned
    return a + b;
};
console.log(add(55, 1));

// convert to arrow function
// const add = (a, b) => {
//     return a + b;
// };


var user = {
    name: 'Jackie',
    cities: ['Middletown', 'Naples', 'Charlotte'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
// forEach vs map
// this.cities.forEach((city) => {
//     console.log(this.name + ' has lived in ' + city);
// })


console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
