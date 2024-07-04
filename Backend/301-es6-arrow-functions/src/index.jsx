import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumber1 = numbers.map(x => x * x)

//Map -Create a new array by doing something with each item in an array.
 const newNumber2 = numbers.map( x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
 const newNumber3 = numbers.filter(x => x < 10 );


//Reduce - Accumulate a value by doing something to each item in an array.
 var newNumber4 = numbers.reduce((x, y) =>  x + y )

////Find - find the first item that matches from an array.
 const newNumber5 = numbers.find(x => x > 10)


////FindIndex - find the index of the first item that matches.
 const newNumber = numbers.findIndex( x => x > 10)

console.log(newNumber1)
console.log(newNumber2)
console.log(newNumber3)
console.log(newNumber4)
console.log(newNumber5)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
