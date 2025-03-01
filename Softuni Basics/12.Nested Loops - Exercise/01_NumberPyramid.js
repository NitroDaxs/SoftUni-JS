function pyramid(input){
    let array = "";
    let currnet = 1;
    let isBigger =false;
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            if(currnet > input){
                isBigger = true;
                break;
            }
            array += currnet + ' ';
            currnet ++;
        }
        console.log(array);
        array = "";
        if(isBigger){
            break;
        }
    }    
}

pyramid(7);