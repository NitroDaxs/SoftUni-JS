function cake(input){
    let height = Number(input[0]);
    let width = Number(input[1]);
    let count = 2;
    let cakeSize = height * width;

    while(input[count] !== "STOP"){
        let currentPieceCount = Number(input[count]);
        cakeSize -= currentPieceCount;
        count ++;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
    }

    if (cakeSize > 0) {
        console.log(`${cakeSize} pieces are left.`);
    }
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);