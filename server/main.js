import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
  
});

console.log("Hello")
let obj = {
  name: "Gerry",
  occupation: "Programmer"
}

console.log("Obj 1 is: ", obj)

let obj2 = {
  ...obj,
  name: "Toby"
}

console.log("Obj 2 is: ", obj2)