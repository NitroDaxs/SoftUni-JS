function specialNumber(number){
    let numbers = [];
    let isSpecial = false;
    for (let i = 1111; i <= 9999; i++) {
        let number2 = i.toString().split('');
        for (let j = 0; j < 1; j++) {
            if(number % number2[0] === 0){
                if(number % number2[1] === 0){
                    if(number % number2[2] === 0){
                        if(number % number2[3] === 0){
                            isSpecial = true;
                        }
                    }
                }
            }
        }
        if(isSpecial === true){
            numbers.push(i);
        }
        isSpecial = false;
    }

    console.log(numbers.join(' '));
}
specialNumber(16);