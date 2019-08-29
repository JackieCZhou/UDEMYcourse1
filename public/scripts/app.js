console.log('App is working');

// JSX  - Javascript XML

// var template = <p>this is JSX from app.js!</p>;
var template = React.createElement("h1", {
    id: "someid"
  }, "some text!");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);