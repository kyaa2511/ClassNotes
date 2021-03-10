/*
-For in loops are great for iterating over values in an object.
Properties in objects are what's called enumerable

-For in loops iterate over an object's enumberable properties
*/

let myStudent = {
    name: "Peter",
    awesome: true, 
    degree: "JavaScript",
    week: 1
}

for (item in myStudent) {
    console.log(item);
    console.log(myStudent[item]);

}

let catArray = ['tabby','british shorthair', 'burmese', 'Maine Coon'] 

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

let myName = "kATANA";
let capName;
for (let x in myName) {
    if(x == 0){
        capName = myName[x].toUpperCase(); 
        console.log(capName);
    } else {
        capName += myName[x].toLowerCase();
    } 
}
console.log(capName);    

