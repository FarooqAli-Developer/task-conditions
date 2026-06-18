// Up to PKR 600,000: 0%
// PKR 600,001 – 1,200,000: 2.5%
// PKR 1,200,001 – 2,400,000: 10%
// PKR 2,400,001 – 3,000,000: 15%
// PKR 3,000,001 – 4,100,000: 20%
// Above PKR 4,100,000: 35%

// let salary=prompt(Enter Your Salary")
// if (Salary=600000) {
// runs if condition1 is TRUE
// } else if (condition2) {
// runs if condition2 is TRUE (condition1 was false)
// } else if (condition3) {
// runs if condition3 is TRUE (conditions 1 and 2 were false)
// } else {
// runs if NONE of the above were true
// }


let annualSalary = Number(prompt("Enter Your Salary"));
let tax = 0;
let netSalary = 0;

// function calculateTax(annualSalary) {
//     let tax = 0;

    if (annualSalary <= 600000) {
        tax = 0
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
    } 
    else if (annualSalary <= 1200000) {
        tax = (annualSalary - 600000) * 0.025;
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
        
    } 
    else if (annualSalary <= 2400000) {
        tax = 15000 + (annualSalary - 1200000) * 0.10;
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
    } 
    else if (annualSalary <= 3000000) {
        tax = 135000 + (annualSalary - 2400000) * 0.15;
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
    } 
    else if (annualSalary <= 4100000) {
        tax = 225000 + (annualSalary - 3000000) * 0.20;
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
    } 
    else {
        tax = 445000 + (annualSalary - 4100000) * 0.35;
        netsalary = annualSalary-tax
        console.log("your net salary is ", netsalary);
    }

//     return {
//         annualTax: tax,
//         monthlyTax: tax / 12,
//         netAnnualSalary: annualSalary - tax,
//         netMonthlySalary: (annualSalary - tax) / 12
//     };

// // Example usage:
// const salary = 2500000;
// console.log(calculateTax(salary));



// let annualSalary = Number(prompt("Enter Your Salary"));
// let tax = 0;
// let netSalary = 0;

// if (annualSalary <= 600000) {
//     tax = 0;
//     netSalary = annualSalary - tax;
// } else if (annualSalary <= 1200000) {
//     tax = (annualSalary - 600000) * 0.025;
//     netSalary = annualSalary - tax;
// } else if (annualSalary <= 2400000) {
//     tax = 15000 + (annualSalary - 1200000) * 0.10;
//     netSalary = annualSalary - tax;
// } else if (annualSalary <= 3000000) {
//     tax = 135000 + (annualSalary - 2400000) * 0.15;
//     netSalary = annualSalary - tax;
// } else if (annualSalary <= 4100000) {
//     tax = 225000 + (annualSalary - 3000000) * 0.20;
//     netSalary = annualSalary - tax;
// } else {
//     tax = 445000 + (annualSalary - 4100000) * 0.35;
//     netSalary = annualSalary - tax;
// }

// This popups the answer on the user's screen
alert("Your annual tax is: PKR " + tax + "\nYour net salary is: PKR " + netSalary);
