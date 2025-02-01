const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

let expression = '';
let result = '';

function buttonClick(event) {
    const buttonValue = event.target;
    const action = buttonValue.dataset.action;
    const value = buttonValue.dataset.value;
    switch (action) {
        case 'number':
            addValue(value);
            break;
        case 'clear':
            clear();
            break;
        case 'backspace':
            removeNumber(value);
            break;
        case 'addition':
        case 'subtraction':
        case 'multiplication':
        case 'division':
            if (expression === '' && result !== '') {
                startFromResult(value);
            }
            else if (expression !== '' && !isLastCharAnOperator()) {
                addValue(value);
            }
            break;
        case 'submit':
            submitEvent();
            break;
        case 'decimal':
            decimal(value);
            break;
    }

    updateDisplay(expression, result);
}

inputBox.addEventListener('click', buttonClick);

//This function adds a value to the expression.
function addValue(value) {
    if (value === '.') {
        //Find the last operator of the expression.
        const lastOperatorIndex = expression.search(/[+\-*/]/);
        //Find the last decimal of the expression.
        const lastDecimalIndex = expression.lastIndexOf('.');
        //Find the last number of the expression.
        const lastNumberIndex = Math.max(
            expression.lastIndexOf('+'),
            expression.lastIndexOf('-'),
            expression.lastIndexOf('*'),
            expression.lastIndexOf('/')
        );
        //Check if the first decimal is the curent number or if the expression is empty
        if (
            (lastDecimalIndex < lastOperatorIndex ||
                lastDecimalIndex < lastNumberIndex ||
                lastDecimalIndex === -1) &&
            (expression === '' ||
                expression.slice(lastNumberIndex + 1).indexOf('-') === -1)
        ) {
            expression += value;
        }

    } else {
        expression += value;
    }
}

//This function updates the display.
function updateDisplay(expression, result) {
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}

//This function clears the expression and the result.
function clear() {
    expression = '';
    result = '';
}

//This function removes the last number from the expression.
function removeNumber() {
    expression = expression.slice(0, -1);
}

//This function checks if the last character of the expression is an operator.
function isLastCharAnOperator() {
    return isNaN(parseInt(expression.slice(- 1)));
}

//This function starts the expression from the result.
function startFromResult(value) {
    expression += result + value;
}

//This function submits and gives the result of the expression.
function submitEvent() {
    result = evalueteExpression();
    expression = '';
}

//This function evaluates the expression.
function evalueteExpression() {
    const evalResult = eval(expression);
    return isNaN(evalResult) || !isFinite(evalResult) ? ' ' : evalResult < 1 ? parseFloat(evalResult).toFixed(10) : parseFloat(evalResult.toFixed(2));
}

//This function adds a decimal point to the expression.
function decimal(value) {
    if (!expression.endsWith('.') && !isNaN(expression.slice(-1))) {
        addValue(value);
    }
}