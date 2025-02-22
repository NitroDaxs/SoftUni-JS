function vacationSavings(input){
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let count = 2;
    let daysSpent = 0;
    let days = 0;

    while(true){
        let command = input[count];
        count ++;
       
       
        if (command === "spend") {
            let currentMoney = Number(input[count]);
            if (currentMoney > availableMoney) {
                availableMoney = 0;
                daysSpent ++;
                days++;
            }
            else{
                availableMoney -= currentMoney;
                daysSpent ++;
                days++;
            }
        } 
        else if (command === "save") {
            let currentMoney = Number(input[count]);
            availableMoney += currentMoney;
            daysSpent = 0;
            days++;
        }
        if (daysSpent === 5) {
            console.log("You can't save the money.");
            console.log(daysSpent);
            break;
        }
        if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`); 
            break;
        }
    }
}

vacationSavings(["250",
        "150",
        "spend",
        "50",
        "spend",
        "50",
        "spend",
        "50",
        "spend",
        "50",
        "spend",
        "50",
        "save",
        "100",
        "save",
        "100"])

