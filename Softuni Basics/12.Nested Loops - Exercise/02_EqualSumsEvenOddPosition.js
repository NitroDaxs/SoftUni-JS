function calc(firstNumber, secondNumber){
    let numbers = [];
    for (let i = firstNumber; i <= secondNumber; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNumber = Number(i);

        for (let j = 0; j < currentNumber.toString().length; j++) {
            if(j % 2 === 0){
                evenSum += Number(currentNumber.toString()[j])
            }else if(j % 2 !== 0){
                oddSum += Number(currentNumber.toString()[j])
            }
        }

        if(evenSum === oddSum){
            numbers.push(currentNumber);
        }
    }   

    console.log(numbers.join(' '));
}

calc(100000, 100050);