// function stores the operator thats pressed on the calculator
function getOperator() {
    operator = this.id;
    console.log(`operator: ${operator}`);
}

// query selector for display window
let display = document.querySelector('.display');

// query selector and click event for all digits 0-9
let digits = Array.from(document.querySelectorAll('.digit'));
digits.map(digit => {
    digit.addEventListener('click', () => console.log('DIGITS'));
})

// query selector and event for all operators " / + - * "
let operators = Array.from(document.querySelectorAll('.operator'));
operators.map(operator => {
    operator.addEventListener('click', getOperator);
})

// query selector and event for equals button
let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => console.log("EQUALS!!!"))


let num1 = '';
let num2 = '';
let operator = '';