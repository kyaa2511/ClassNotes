/*
-For of loops and for in loops both do the same thing which is loop over data structures.  There is one key difference, what they iterate over
    -for in looops iterate over the enumerable properties in an object
    -for of loops iterate over the values of an iterable object
*/

let catArray = ['tabby','british shorthair', 'burmese', 'Maine Coon'] 

for (cat of catArray) {
    console.log(cat);
}
//Cannot use "for of" loops on objects without indecies.
let myStudent = {
    name: "Peter",
    awesome: true, 
    degree: "JavaScript",
    week: 1
}

for (stud of student) {
    console.log(stud);
}

// "For of" loops are best used on arrays
// "For in" loops are best used on objects 