//This function prints the numbers divisible by 9 in a given range on the console.
function numbersDivisibleBy9(firstNumber, secondNumber) {
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9(100, 200);