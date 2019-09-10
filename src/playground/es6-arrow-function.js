const square = function(x){
return x * x;
};
// regular function vs arrow function
// const squareArrow = (x) => {
// return x * x;
// };

// arrow function expression syntax example
const squareArrow = (x) => x * x;

console.log(squareArrow(4));


const getFirstName = (fullName) => {
return fullName.split(' ')[0];
}
console.log(getFirstName('Jackie Zhou'));

// const getFirstName = (fullName) => fullName.split('')[0];