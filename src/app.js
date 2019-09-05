console.log('App is working');

// TO RUN PROJECT: 
// YARN INSTALL
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// JSX  - Javascript XML

var template = (
    <div>
        <h1>Ensure app is working</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);
// Creating these var's allows for information to be collected/edited dynamically
var userName = 'Name';
var userAge = 27;
var userLocation = 'Austin';

// create a user object to dynamically add in user info.
var user = {
    name: 'Jackie',
    age: 31,
    location: 'NC',
}

var templateTwo = (
    <div>
    <h1>{'Welcome ' + user.name + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location} </p>
    </div>
);


var sampleA = {
    title: 'indecision app',
    project: 1,
    teacher: 'Andrew',
}

var templateThree = (
    <div>
    <h2>{'What is the project called? ' + sampleA.title}</h2>
    <p>Days working on project: {sampleA.project}</p>
    <p>Instructor: {sampleA.teacher}</p>
    </div>
);

var appRoot = document.getElementById('app');


// The code below was the babel generated conversion used to ensure the app was running on local the server
// var template = React.createElement("h1", {
//     id: "someid"
//   }, "some text!");

ReactDOM.render(templateThree, appRoot);