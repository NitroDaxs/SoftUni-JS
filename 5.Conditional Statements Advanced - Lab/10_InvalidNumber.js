//This function checks if a given number is in the range [100, 200] and 0.
function invalidNumber(input) {
    input = Number(input);
    if (input >= 100 && input <= 200 || input === 0) {
        console.log();
    } else {
        console.log('invalid');
    }
}

invalidNumber(75);
invalidNumber(150);
invalidNumber(220);
invalidNumber(199);
invalidNumber(-1);