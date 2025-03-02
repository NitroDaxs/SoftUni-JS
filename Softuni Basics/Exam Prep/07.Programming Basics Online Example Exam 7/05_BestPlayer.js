function bestPlayer(input){
    let mostGoals = 0;
    let bestPlayer= 0;
    let count = 0;

    while(input[count] !== "END"){
        let currentPlayer = input[count];
        count++;
        let currentGoals = Number(input[count]);
        count++;

        if(currentGoals > mostGoals){{
            mostGoals = currentGoals;
            bestPlayer = currentPlayer;
        }
        if(mostGoals >= 10){
            break;
        }
    }}

    console.log(`${bestPlayer} is the best player!`);
    if(mostGoals >= 3){
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`)
    }
}

bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"]);