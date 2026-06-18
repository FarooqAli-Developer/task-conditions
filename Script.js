// WHAT IS A CONDITION?
// A condition is a question that has only two answers: TRUE or FALSE

let A = 10;
let B = 9;
if (A > B) {
    console.log("A is greater than B");
} else {
    console.log("A is not greater than B");
}
// 2
let D = 10;
let C = 8;
if (D >= C) {
    console.log(true);
} else {
    console.log(false)
}

console.log(typeof true);

// 3
let Age= 18;
if (Age >= 18) {
    console.log("You are Wellcome", true);
} 
else {
    console.log("You are under 18", false)
}

console.log(typeof true);

// 4
let age= prompt("Enter Your Age")
if (age >= 18) {
    console.log("You are Wellcome", true);
} 
else {
    console.log("You are under 18", false)
}

console.log(typeof true);