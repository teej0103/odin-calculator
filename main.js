let num1 = '';
let num2 = '';
let operator = '';
let isOperatorChosen = false;

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

    if(num1 !== '' && num2 !== '' && operator !== '') {
        equalsCalculate();
    }
    operator = this.value;

    isOperatorChosen = true;

}

function buildNumber() {
    if(isOperatorChosen === false) {
        num1 += this.value;
        display.innerText = num1;
    }
    else {
        num2 += this.value;
        display.innerText = num2;
    }
}
// DONT THINK I NEED THIS YET BUT HANGING ONTO IT
/*
// calculate function for when equals button is not pressed and the useer strings operations
function stringCalculate() {
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

    console.log(`num1: ${num1}\noperator: ${operator}\nnum2: ${num2}`);
}
*/

// calculate function for when the equals button is used to perform operations
function equalsCalculate() {
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

    console.log(`num1: ${num1}\noperator: ${operator}\nnum2: ${num2}`);
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

// query selector and event for equals button
let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equalsCalculate)