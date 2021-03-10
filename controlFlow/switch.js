/*
-Switch statements execute a black of code depending on different cases
-The switch statement is often used ogether with a break or a default keywork(or both). They are optional
        -the break keyword breaks out of the swich block. this will stop the execution of more code or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
        -default keyword specifies some code to run if there is no case match.  There can only be one default keyword in an switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected.

*/

let officeCharacter = "Kevin"

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break; 
    case "Kevin":
        console.log("A mistake plus keleven gets you home by seven");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

switch ("cake") {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
    default:
        console.log("Not on the menu.");
}