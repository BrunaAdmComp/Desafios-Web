let num = parseInt(gets()); 
let hours = parseInt(gets()); 
let wage = parseFloat(gets()); 
let salary = parseFloat(wage * hours).toFixed(2);
console.log("NUMBER = " + num);
console.log("SALARY = U$ " + salary);
