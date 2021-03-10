/*
A ternary basically acts as a shortcut to writing if , if/else, and else/if statememts
*/

let num = 6;

//ternary
(num > 0) ? console.log('Yes'): console.log('No');

//instead of 

if (num > 0) {
    console.log('yes');
} else {
    console.log('no')
}

let myAge = 33;

(myAge >= 25) ? console.log('You can rent a car') : 
(myAyAge >= 21) ? console.log('Yay! You can drink!') : 
(myAge >= 18) ? console.log('You can vote!') : 
console.log(`Sorry, you're too young to do anything fun.`); 