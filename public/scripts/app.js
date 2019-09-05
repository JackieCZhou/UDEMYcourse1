'use strict';

// differences between var, let, const


// can be reassigned and redefined.  "Function scoped" each 
// variable is specific to the function is was created inside of.
var nameVar = 'Name';
var nameVar = 'Colleen';
console.log('nameVar', nameVar);

// "Function scoped" each variable is specific to the function is was created inside of.
function getPetname() {
    var petName = 'Molly';
    return petName;
}

getPetname();
console.log(petName); //Wouldn't work.  would get undefined


// block scoping samp.  This only works with var because firstName is available in and outside of the function
var fullName = 'Jackie Zhou';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// cannot be redefined, can be reassigned though.  Also functino scoped
var nameLet = 'Jackie';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// cannot be redefined or reassigned. Created with the intent that the value won't change. Also function scoped.
var nameConst = 'frank';
console.log('nameConst', nameConst);

function getPetname() {
    var petName = 'Molly';
    return petName;
}

var petName = getPetname();
console.log(petName); //This would work because 
// you are getting the definition of petName from the scope on line 35, not on line 30

// block scoped is bound to functions also to block like an if statement

var fullName = 'Jackie Zhou';
if (fullName) {
    var _firstName = fullName.split(' ')[0];
    console.log(_firstName); //this works becuase it is still within the function
}

console.log(firstName); //this woudln't work becuause firstName is only available in the function
