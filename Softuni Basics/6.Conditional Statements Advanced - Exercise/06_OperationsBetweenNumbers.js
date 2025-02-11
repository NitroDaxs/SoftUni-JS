//This function acts as a calculater for two numbers and an operator.
function calculator(firstNumber, secondNumber, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`);
            }
            else {
                console.log(`Cannot divide ${firstNumber} by zero`);
            }
            break;
        case '%':
            if (secondNumber !== 0) {
                result = firstNumber % secondNumber;
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            }
            else {
                console.log(`Cannot divide ${firstNumber} by zero`);
            }
            break;
    }

    if (result % 2 === 0 && operator !== '/' && operator !== '%') {
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
    } else if (result % 2 !== 0 && operator !== '/' && operator !== '%') {
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);

    }
}


calculator(5, 0, '*');
calculator(10, 12, '+');
calculator(10, 0, '+');
calculator(10, 1, '-');
calculator(7, 3, '*');
calculator(5, 0, '/');
calculator(123, 12, '/');
calculator(10, 3, '%');
calculator(10, 0, '%');