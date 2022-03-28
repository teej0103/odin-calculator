// all four operation functions
function add(x, y) {
    let sum = parseFloat(x) + parseFloat(y);
    if(sum > 999999999) {
        return sum.toExponential(0);
    }
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    let result = parseFloat(x) - parseFloat(y);
    if(result < -999999999) {
        return result.toExponential(0);
    }
    return result;
}

function multiply(x, y) {
    let result = parseFloat(x) * parseFloat(y);
    if(result > 99999999999) {
        return result.toExponential(0);
    }
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    let quotient = parseFloat(x) / parseFloat(y);
    if(quotient.toString().length > 9) {
        return quotient.toExponential(0);
    }
    return quotient;
}

// function stores the operator thats pressed on the calculator
function getOperator() {

    if(isEquals === true) {
        num2 = '';
        operator = '';
    }
    // if both numbers have been entered, perform caculation. This 
    // will be skipped on the first iteration of the calculator
    if(num1 !== '' && num2 !== '') {
        // call calculate function
        chooseOperation();
        num2 = '';
    }
    // store operator thats pressed on calculator
    operator = this.value;

    // set to true to determine which number to build
    isOperatorChosen = true;
    isEquals = false;

}

// builds number based on if an oerator has been picked or not,
// Will only build num1 on first iteration. After that num1 is used for the result
// of an operation
function buildNumber() {
    if(isOperatorChosen === false && num1.length < 9) {
        // add the digit to the num1 variable
        num1 += this.value;
        // display new num1 to the display on calculator
        display.innerText = num1;
    }
    else if(isOperatorChosen === true && num2.length < 9) {
        // add digit to num2
        num2 += this.value;
        // display new num2 to display on calculator
        display.innerText = num2;
    }
}

// adds a decimal point to either number creating a float to be operated on
function makeFloat() {
    // add to first number if operator isnt picked
    if(isOperatorChosen === false) {
        // check if there is already a decimal point in the number already
        if(!num1.includes('.')) {
            // add decimal
            num1 += '.';
            // display number
            display.innerText = num1;
        }
    }
    // add to second number
    else {
        // check for existing decimal point
        if(!num2.includes('.')) {
            // add decimal
            num2 += '.';
            // display number
            display.innerText = num2;
        }
    }
}

// function for the back button 
function goBack() {
    if(isOperatorChosen === false) {
        num1 = num1.slice(0, -1);
        display.innerText = num1;
    }
    else if(isOperatorChosen === true) {
        num2 = num2.slice(0, -1);
        display.innerText = num2; 
    }
}

// calculate function for performing operations
function chooseOperation() {
    if(operator === '+') {
        num1 = add(num1, num2).toString();
        display.innerText = num1;
    }
    else if(operator === '-') {
        num1 = subtract(num1, num2).toString();
        display.innerText = num1;
    }
    else if(operator === '*') {
        num1 = multiply(num1, num2).toString();
        display.innerText = num1;
    }
    else if(operator === '/') {
        if(num2 === '0') {
            display.innerText = '=/ Error';
            setTimeout(() => {
                clearAndReset();
            }, 2000)
            return;
        }
        num1 = divide(num1, num2).toString();
        display.innerText = num1;
    }
}

// calculates operation depending on order and what numbers are available. Should have apple-calculator like functionality
function calculate() {
    if(num1 !== '' && num2 === '') {
        num2 = num1;
        chooseOperation();
        isEquals = true;
        return;
    }
    else if(num1 === '' && num2 !== '') {
        num1 = '0';
        chooseOperation();
        return;
    }
    else {
        chooseOperation();
        isEquals = true;
        return;
    }
}

// resets all variables back to their default values and shows '0' on display
function clearAndReset() {
    num1 = '';
    num2 = '';
    operator = '';
    isOperatorChosen = false;
    isEquals = false;
    display.innerText = '0';
}

// query selector for display window
let display = document.querySelector('.display');

// query selector and click event for all digits 0-9
let digits = Array.from(document.querySelectorAll('.digit'));
digits.map(digit => {
    digit.addEventListener('click', buildNumber);
})

// query selector and event for all operators " / + - * "
let operators = Array.from(document.querySelectorAll('.operator'));
operators.map(operator => {
    operator.addEventListener('click', getOperator);
})

// query selector and event listener for decimal button to make number a float
let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', makeFloat);

// query selector and event for equals button
let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', calculate)

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAndReset);

let backButton = document.querySelector('.back');
backButton.addEventListener('click', goBack);

let num1 = '';
let num2 = '';
let operator = '';
let isEquals = false;
let isOperatorChosen = false;