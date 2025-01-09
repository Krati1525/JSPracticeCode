// Calculator Function 

// Write a JS function calculator program that takes two numbers and one operator as parameter and return the result of the operation. The function should support addition, substraction, division, multiplications. 

var a, b, operator, result ;
console.log("Your Calculations are here ........");

function calculator(a, b, operator) {
    switch(operator) {
        case '+': result =  a + b ;
                  // return {result} ;
        case '-': result =  a - b;
                  // return {result};
        case '*': result = a * b;
                  // return { result };
        case '/': result =  b !== 0 ? a / b : "Division by zero is not allowed";
                  // return { result };
        default: return "Hii Krati, are you enjoying.........?"
    }
    return { result };
}

var additionCalculation = calculator(12, 3, '+');
console.log(`Addition of ${a} and ${b} is: ${additionCalculation}`);
var substractionCalculation = calculator(23, 9, '-');
console.log(`Substraction of ${a} and ${b} is: ${substractionCalculation}`);
var multiplicationCalculation = calculator(2, 3, '*');
console.log(`Multiplication of ${a} and ${b} is: ${multiplicationCalculation}`);
var divisionCalculation = calculator(25, 5, '/');
console.log(`Division of ${a} and ${b} is: ${divisionCalculation}`);

// Output 

// Your Calculations are here ........ 
// Addition of undefined and undefined is: [object Object] 
// Substraction of undefined and undefined is: [object Object] 
// Multiplication of undefined and undefined is: [object Object] 
// Division of undefined and undefined is: [object Object]

 
// Another Way to try this 
var a, b, result;
function calculator(a, b, operator) {
  
    switch (operator) {
        case '+': 
            result = a + b;
            break;
        case '-': 
            result = a - b;
            break;
        case '*': 
            result = a * b;
            break;
        case '/': 
            result = b !== 0 ? a / b : "Division by zero is not allowed";
            break;
        default: 
            return { error: "Invalid operator!" };
    }
    return { a, b, operator, result };
}

// Test cases
var additionCalculation = calculator(12, 3, '+');
console.log(`Addition of ${additionCalculation.a} and ${additionCalculation.b} is: ${additionCalculation.result}`);

var subtractionCalculation = calculator(23, 9, '-');
console.log(`Subtraction of ${subtractionCalculation.a} and ${subtractionCalculation.b} is: ${subtractionCalculation.result}`);

var multiplicationCalculation = calculator(2, 3, '*');
console.log(`Multiplication of ${multiplicationCalculation.a} and ${multiplicationCalculation.b} is: ${multiplicationCalculation.result}`);

var divisionCalculation = calculator(25, 5, '/');
console.log(`Division of ${divisionCalculation.a} and ${divisionCalculation.b} is: ${divisionCalculation.result}`);

// Output

// Addition of 12 and 3 is: 15
// Subtraction of 23 and 9 is: 14
// Multiplication of 2 and 3 is: 6
// Division of 25 and 5 is: 5



