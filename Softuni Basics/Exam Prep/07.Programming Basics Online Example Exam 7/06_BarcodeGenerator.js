function barcode(firstNum, secondNum){
    let numbers = [];
    let first = firstNum.toString().split('');
    let second = secondNum.toString().split('');

    for (let i = first[0]; i <= second[0]; i++) {
        for (let j = first[1]; j <= second[1]; j++) {
            for (let k = first[2]; k <= second[2]; k++) {
                for (let l = first[3]; l <= second[3]; l++) {
                    if(i % 2 === 1 && j % 2 === 1 && k % 2 === 1 && l % 2 === 1){
                        numbers.push(`${i}${j}${k}${l}`);
                    }
                }
            }
        }
    }

    console.log(numbers.join(' '));
}

barcode(3256,
    6579);