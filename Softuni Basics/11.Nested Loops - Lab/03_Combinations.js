function combinations(input){
    let count = 0;

    for (let i = 0; i <= input; i++) {
        for (let j = 0; j <= input; j++) {
            for (let k = 0; k <= input; k++) {
                if(i + j + k === input){
                    count ++;
                }
            }
        }
    }
    console.log(count);
}

combinations(25);