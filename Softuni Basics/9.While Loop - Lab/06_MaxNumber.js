function maxNumber(input){
    let biggestNum = Number.MIN_SAFE_INTEGER;
    count =0;
    while(input[count] !== 'Stop'){
        let currentNumber = Number(input[count]);
        if(biggestNum < currentNumber){
            biggestNum = currentNumber;
        }
        count++;
    }
    
    console.log(biggestNum);
}

maxNumber(["-1", "-2", "Stop"]);