// function stores the operator thats pressed on the calculator
function getOperator() {
    //TEST//
    operator = this.value;
    console.log(`operator: ${operator}`);

    isOperatorChosen = true;
}

function buildNumber() {
    if(isOperatorChosen === false) {
        num1 += this.value;
    }
    else {
        num2 += this.value;
    }

    console.log(`num1: ${num1}\nnum2: ${num2}`);
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
equalsButton.addEventListener('click', () => console.log("EQUALS!!!"))


let num1 = '';
let num2 = '';
let operator = '';
let isOperatorChosen = false;

// calculate on 2nd digit