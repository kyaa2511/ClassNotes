/*
-Loops offer us a quick and easy way to do something repeatdely, or loop over something.
There are many kinds of loops, but they all roughly do the same thing.
        
    It will repeat until a specified condition evaluates to true
        -for statement 
        -do while statement
        -while statement
        -labeled statement
        -break statement
        for in statement
        for of statement

Note: There is a danger of infinate loops. There are three main parts to a loop: 
        -initial expression
        -condition
        -increment expression
*/

let i = 7;
 
for (i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 21; i+=2) {
    console.log(i);
}

for (let i = 10; i >= 0; i-=1) {
    console.log(i);
}

for (let i = 0; i > -25; i-=2) {
    console.log(i);
}

let myName = "Kenn"

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i])
}