function numbers(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let isPrime = true;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        isPrime = true;
        if (input[i] === "stop") {
            break;
        }
        if (currentNumber < 0) {
            console.log("Number is negative.");
            continue;
        }

        for (let j = 2; j < currentNumber; j++) {
            if (currentNumber % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += currentNumber;
        } else {
            nonPrimeSum += currentNumber;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

numbers(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);