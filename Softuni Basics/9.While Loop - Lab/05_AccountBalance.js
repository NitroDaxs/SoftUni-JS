function accountBalance(input){
    let count = 0;
    let sum = 0;

    while(input[count] !== 'NoMoreMoney'){
        if(input[count] < 0){
             console.log(`Invalid operation!`);
             break;
            
        } else{
            let currentNumber = Number(input[count]);
            sum += currentNumber;
            console.log(`Increase: ${currentNumber.toFixed(2)}`);
            count++;
        } 
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])