// ********
// Types
// ********

/*     
BOOLEANS

-Are ONLY True or False values
-Boolenas are like light switches

*/

let on = true
console.log(on)

let off = false;
console.log(off);

/*
NULL
- Null is like an empty bucket, it has the capacity to be filled, but it currently is not.
*/

let emptyBucket = null
emptyBucket = 'water'
console.log(emptyBucket);

/*
UNDEFINED
- Currently has no value assigned
-Acts as th menas (plastic/metal) to create the bucket
*/

let metal; // correct way to assign undefined
//variable
let metal = undefined; // wrong way, it is redundant 
//to initialize of it is not defined

console.log(metal);

// Null vs. UNDEFINED
//**************** 
//Null is like an empty bucket, the bucket is there, but ther's nothing in it.
//Undefined is like the materials we will use to create the bucket

//We can also think of these two cariables as pizza box
// - Null is like the empty pizza box, just waiting for a pizza
// - Undefined is like the unassembled box

let emptyBox = null;
let unassembledBox;

/*
In JS numbers are literally jus mumbers
You can add, subtract, multiply, and divide
You can use decimals

*/
 let degrees = 90;
 console.log(degrees);

 let notQuite = 0.2 + 0.1;
 console.log(notQuite);

 // Function to convert a string to numbers IF that string is a number
 
 let a = Number('123');
 console.log(a);

 // STRINGS 
// A string is any value in between a set of quotes of back ticks
// A string can be denoted by '', "", ``
// 'string' === "string" === `string`

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo);

// Numbers and Strings

let addition = 1050 + 100
console.log(addition);
let concatenation = '1050' + '100'
console.log(concatenation);


//OBJECTS
//Can be denoted by {}
//Objects store 2 things, a key and a value
// We can access these vvalues, by digging into the object with dot notation - object.value

let artist  = {
    //key  //value
    name:   Queen,
    albums:   15,
    allMemberAlive: false
}

console.log(artist.name);

/*  
ARRAYS 

let lists = ['item1', 'item2', 'item3']
               (0)       (1)      (2)
               
Denoted by []
You can access a balue by digging into the array with array[0]






*/

let burritos = ['large', 4, true]

console.log(burritos)

//ADDITION VS CONCATENATION

//Addition is adding numbers together
//concatenation is adding strings together

let add  = 100 + 100;
console.log(add);

let concat = 'Katana' + 'Yaa';
console.log(concat);

let stillConcat = '1050' + 100;
console.log(stillConcat);


let firstName = 'Katana';
let lastName = 'Yaa';
let houseNumber = 2831;
let street = 'Caroline Ave'
let city = 'Indianapolis';
let state = 'Indiana';
let zip = '46218'

console.log(firstName, lastName, houseNumber, street, city, state, zip);
