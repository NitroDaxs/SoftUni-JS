function calculator(firstNumber, secondNumber, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
            }
            break;
        case '-':
            result = firstNumber - secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
            }
            break;
        case '*':
            result = firstNumber * secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
            }
            break;
        case '/':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
                return;
            }
            result = firstNumber / secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case '%':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
                return;
            }
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
    }
}

calculator(10, 12, '+');
calculator(10, 1, '-');
calculator(7, 3, '*');
calculator(5, 0, '*');
calculator(5, 0, '/');
calculator(123, 12, '/');
calculator(10, 3, '%');
calculator(10, 0, '%');