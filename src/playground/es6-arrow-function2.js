// arguments object is no longer bound with arrow function
// this keyword also no longer bound


const add = function (a, b) {
    console.log(arguments) //prints out all arguments in a function regardless of whats being returned
    return a + b;
}
console.log(add(55, 1));

// convert to arrow function
// const add = (a, b) => {
//     return a + b;
// };


const user = {
    name: 'Jackie',
    cities: ['Middletown', 'Naples', 'Charlotte'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
// forEach vs map
// this.cities.forEach((city) => {
//     console.log(this.name + ' has lived in ' + city);
// })


console.log(user.printPlacesLived());


const multiplier = {
 numbers:  [1, 2, 3],
 multiplyBy: 5,
 multiply() {
     return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());