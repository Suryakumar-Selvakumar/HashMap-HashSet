import { HashMap } from "./HashMap.js";

const test = new HashMap(16, 0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Overwriting few nodes
test.set("apple", "dark-red");
test.set("jacket", "black");
test.set("lion", "brown");

// Adding this node will make HashMap exceed its current load factor
// so HashMap should expand
test.set("moon", "silver");

// Testing if all methods of HashMap work for base one and expanded one
// Uncomment each method, then run in console to check it out

// set() - Works for both
//Overwriting few nodes after the HashMap was expanded
//test.set("ice cream", "orange");
//test.set("kite", "yellow");
//test.set("hat", "white");

// get() - Works for both
// console.log(test.get("ice cream"));

// has(key) - Works for both
// console.log(test.has("moon"));

// remove(key) - Works for both
// console.log(test.remove("moon"));
// console.log(test.has("moon"));

// length() - Works for both
//console.log(test.length());

//clear() - Works for both
// console.log(test.clear());
// console.log(test);
// console.log(test.has("moon"));

// keys() - Works for both
// console.log(test.keys());

// values() - Works for both
// console.log(test.values());

// entries() - Works for both
// console.log(test.entries());
