function combinations(firstNum,secondNum,magicNum){
    let count = 0;
    let isFound = false;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            count++;
            if(i + j === magicNum){
                isFound = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${i+j})`);
                break;
            }
        }
        if(isFound === true){
                break;
        }
    }

    if(isFound === false){
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}



combinations(1,
        10,
        5);
combinations(23,
    24,
    20);
