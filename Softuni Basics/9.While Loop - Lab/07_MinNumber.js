function maxNumber(input){
    let smallestNum = Number.MAX_SAFE_INTEGER;
    count =0;
    while(input[count] !== 'Stop'){
        let currentNumber = Number(input[count]);
        if(smallestNum > currentNumber){
            smallestNum = currentNumber;
        }
        count++;
    }
    
    console.log(smallestNum);
}

maxNumber(["-1", "-2", "Stop"]);