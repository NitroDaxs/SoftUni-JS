function balls(input){
    let totalPoints = 0;

    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    let redPoint = 5;
    let orangePoint = 10;
    let yellowPoint = 15;
    let whitePoint = 20;

    for (let i = 1; i < input.length; i++) {
        let ball = input[i];
        switch(ball){
            case 'red':
                redCount ++;
                totalPoints += redPoint;
            break;
            case 'orange':
                orangeCount ++;
                totalPoints += orangePoint;
            break;
            case 'yellow':
                yellowCount ++;
                totalPoints += yellowPoint;
            break;
            case 'white':
                whiteCount ++;
                totalPoints += whitePoint;
            break;
            case 'black':
                blackCount ++;
                totalPoints = Math.floor(totalPoints /   2);
            break;
            default:
                otherCount ++;
                
            break;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"]);