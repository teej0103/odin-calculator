// function stores the operator thats pressed on the calculator
function getOperator() {
    operator = this.value;

    isOperatorChosen = true;
    if(num1 !== '' && num2 !== '' && operator !== '') {
        stringCalculate();
    }
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

// calculate function for when equals button is not pressed and the useer strings operations
function stringCalculate() {
    num1 = (parseFloat(num1) + parseFloat(num2)).toString();
    display.innerText = num1;
    num2 = ''
    console.log(`num1: ${num1}\noperator: ${operator}\nnum2: ${num2}`);
}

// calculate function for when the equals button is used to perform operations
function equalsCalculate() {
    num1 = (parseFloat(num1) + parseFloat(num2)).toString();
    display.innerText = num1;
    num2 = '';
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


let num1 = '';
let num2 = '';
let operator = '';
let isOperatorChosen = false;

