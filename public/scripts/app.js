'use strict';

console.log('App is working');

// TO RUN PROJECT: 
// YARN INSTALL
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// JSX  - Javascript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Ensure app is working'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);
// Creating these var's allows for information to be collected/edited dynamically
var userName = 'Name';
var userAge = 27;
var userLocation = 'Austin';

// create a user object to dynamically add in user info.
var user = {
    name: 'Jackie',
    age: 31,
    location: 'NC'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Welcome ' + user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        ' '
    )
);

var sampleA = {
    title: 'indecision app',
    project: 1,
    teacher: 'Andrew'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'What is the project called? ' + sampleA.title
    ),
    React.createElement(
        'p',
        null,
        'Days working on project: ',
        sampleA.project
    ),
    React.createElement(
        'p',
        null,
        'Instructor: ',
        sampleA.teacher
    )
);

var appRoot = document.getElementById('app');

// The code below was the babel generated conversion used to ensure the app was running on local the server
// var template = React.createElement("h1", {
//     id: "someid"
//   }, "some text!");

ReactDOM.render(templateThree, appRoot);
