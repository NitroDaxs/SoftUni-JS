function parking(days, hours){
    let sum = 0;
    let currentSum =0;
    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= hours; j++) {
            if(i % 2 === 0 && j % 2 !== 0){
                currentSum += 2.50;
            }
            else if(i % 2 !== 0 && j % 2 === 0){
                currentSum += 1.25;
            }
            else{
                currentSum += 1;
            }

        }   
        console.log(`Day: ${i} - ${currentSum.toFixed(2)} leva`);
        sum += currentSum;
        currentSum = 0;
    }
    console.log(`Total: ${sum.toFixed(2)} leva`);
}

parking(5,2);