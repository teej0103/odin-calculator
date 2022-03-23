// all four operation functions
function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    return parseFloat(x) / parseFloat(y);
}

// function stores the operator thats pressed on the calculator
function getOperator() {

    // if both numbers have been entered, perform caculation. This 
    // will be skipped on the first iteration of the calculator
    if(num1 !== '' && num2 !== '') {
        // call calculate function
        calculate();
    }
    // store operator thats pressed on calculator
    operator = this.value;

    // set to true to determine which number to build
    isOperatorChosen = true;

}

// builds number based on if an oerator has been picked or not,
// Will only build num1 on first iteration. After that num1 is used for the result
// of an operation
function buildNumber() {
    if(isOperatorChosen === false) {
        // add the digit to the num1 variable
        num1 += this.value;
        // display new num1 to the display on calculator
        display.innerText = num1;
    }
    else {
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

// calculate function for performing operations
function calculate() {
    if(operator === '+') {
        num1 = add(num1, num2).toString();
        display.innerText = num1;
        num2 = ''    
    }
    else if(operator === '-') {
        num1 = subtract(num1, num2).toString();
        display.innerText = num1;
        num2 = ''   
    }
    else if(operator === '*') {
        num1 = multiply(num1, num2).toString();
        display.innerText = num1;
        num2 = ''   
    }
    else if(operator === '/') {
        num1 = divide(num1, num2).toString();
        display.innerText = num1;
        num2 = ''   
    }
}

// TEST FUNCTION (supposed to check which combo of numbers/operators are full and calculate accordingly)
function howToOperate() {
    if(num1 !== '' && num2 !== '') {
        calculate();
    }
    else{
        return;
    }
    console.log(`num1: ${num1}\noperator: ${operator}\nnum2: ${num2}`);
}

// resets all variables back to their default values and shows '0' on display
function clearAndReset() {
    num1 = '';
    num2 = '';
    operator = '';
    isOperatorChosen = false;
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
equalsButton.addEventListener('click', howToOperate)

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAndReset);

let num1 = '';
let num2 = '';
let operator = '';
let isOperatorChosen = false;


// take care of long numbers and overflow