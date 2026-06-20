let annualSalary = Number(prompt("Enter Your Salary"));
let tax = 0;
let netSalary=0;

if (annualSalary <= 600000) {
tax = 0;
console.log("Your Net salary is ", netSalary);
}
else if (annualSalary >= 600001 && annualSalary <= 1200000){
    tax = (annualSalary - 600000) * 0.01;
}    

else if (annualSalary >= 1200001 && annualSalary <= 2400000){
    tax = (annualSalary - 600000) * 0.11;
}
else if (annualSalary >= 2400001 && annualSalary <= 3000000){
    tax = (annualSalary - 600000) * 0.2;
}   
else if (annualSalary >= 3000001 && annualSalary <= 4100000){
    tax = (annualSalary - 600000) * 0.25;
}    
else if (annualSalary >= 4100001){
    tax =(annualSalary - 600000) * 0.29;
    
}

else {
    console.log("your salary is not calculated");
}
    
    netSalary = annualSalary - tax;
    console.log("Your annual tax is: PKR",tax),
    console.log("Your monthly tax is: PKR", tax / 12),
    console.log("Your net annual salary is: PKR", annualSalary - tax),
    console.log("Your net monthly salary is: PKR", (annualSalary - tax) / 12)

    alert("Your annual tax is: PKR " + tax + "\nYour net salary is: PKR " + netSalary);
