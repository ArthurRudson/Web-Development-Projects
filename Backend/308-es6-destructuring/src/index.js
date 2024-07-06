// CHALLENGE: uncomment the code below and see the car stats rendered
//import animals, {useAnimals} from "./data";

//const [cat, dog] = animals

// const {name: catName, sound: catSound} = cat

// const {name = "Fluffy", sound = "Purr"} = cat

// const {name, sound, feedingRequirements: {food, water}} = cat

//const [animal, makeSound] = useAnimals(cat)





 import React from "react";
 import ReactDOM from "react-dom";
 import cars from "./practice";

 const [honda, tesla] = cars 

 const {speedStats: {topSpeed: hondaTopSpeed}} = honda
 const {speedStats: {topSpeed: teslaTopSpeed}} = tesla

 const {coloursByPopularity: [hondaTopColour]} = honda
 const {coloursByPopularity: [teslaTopColour]} = tesla

 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );
