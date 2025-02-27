function vacation(input){
    let destination = "";
    let saved = 0;
    let count = 0;

    while(input[count] !== "End"){
        if(isNaN(input[count])){
             destination = input[count];
        }
        count++;
        let amountNeeded = input[count];
        count++;

        if(saved >= amountNeeded){
            console.log(`Going to ${destination}!`);
            count++;
        }
        while(input[count] !== "End"){
            currentMoney = Number(input[count]);
            saved += currentMoney;
            count++;

            if(saved >= amountNeeded){
                console.log(`Going to ${destination}!`);
                saved=0;
                break;
            }
        }
    }
}

vacation(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
    