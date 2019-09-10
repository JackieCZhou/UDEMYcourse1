console.log('App is working');

// TO RUN PROJECT: 
// YARN INSTALL
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// JSX  - Javascript XML

const app ={
    title: 'Indecision App',
    subtitle: 'udemy course',
    options: ['one', 'two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

// This version is from the in course exercise on rendering options based on info
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
//         <ol>
//             <li>Item 1</li>
//             <li>Item 2</li>
//         </ol>
//     </div>
// );

// Creating these const's allows for information to be collected/edited dynamically
const userName = 'Name';
const userAge = 27;
const userLocation = 'Austin';

// create a user object to dynamically add in user info.
const user = {
    name: 'Jackie',
    age: 31,
    location: 'NC',
}

// creating a function call
function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;

    } else {
        return undefined;
    }

}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// activity from video, create template yourself
const sampleA = {
    title: 'indecision app',
    project: 1,
    teacher: 'Andrew',
}

const templateThree = (
    <div>
        <h2>{'What is the project called? ' + sampleA.title}</h2>
        <p>Days working on project: {sampleA.project}</p>
        <p>Instructor: {sampleA.teacher}</p>
    </div>
);

const appRoot = document.getElementById('app');


// The code below was the babel generated conversion used to ensure the app was running on local the server
// const template = React.createElement("h1", {
//     id: "someid"
//   }, "some text!");

ReactDOM.render(template, appRoot);