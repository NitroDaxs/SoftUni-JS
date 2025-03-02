function safari(budget, litersNeeded, dayOfWeek){
    let literPrice=  2.10;
    let tourGuide= 100;
    let saturday = 0.10;
    let sunday =0.20;
    let litersSum = 0;
    let totalSum = 0;

    switch (dayOfWeek) {
        case 'Saturday':
            litersSum = litersNeeded * literPrice;
            totalSum = litersSum + tourGuide;
            totalSum -= totalSum * saturday;
            break;
        case 'Sunday':
            litersSum = litersNeeded * literPrice;
            totalSum = litersSum + tourGuide;
            totalSum -= totalSum * sunday;
            break;
    }

    if(budget >= totalSum){
        console.log(`Safari time! Money left: ${(budget - totalSum).toFixed(2)} lv.`)
    }
    else{
        console.log(`Not enough money! Money needed: ${(totalSum - budget).toFixed(2)} lv.`)
    }
}

safari(1000,
    10,
    'Sunday',
    );