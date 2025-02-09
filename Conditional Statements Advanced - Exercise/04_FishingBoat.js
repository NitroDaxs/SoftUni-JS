//This function calculates if the budget is enough and prints the appropriate message.
function fishingBoat(budget, season, fishermen) {
    let rent = 0.0;
    let discount = 0.0;

    if (fishermen <= 6) {
        discount = 0.10;
    }
    else if (fishermen > 6 && fishermen <= 11) {
        discount = 0.15;
    }
    else if (fishermen > 11) {
        discount = 0.25;
    }

    switch (season) {
        case 'Spring':
            rent = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;
    }

    let totalPrice = rent - (rent * discount);
    if (fishermen % 2 == 0 && season != 'Autumn') {
        totalPrice -= totalPrice * 0.05;
    }
    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(3000, 'Summer', 11);
fishingBoat(3600, 'Autumn', 6);
fishingBoat(3600, 'Autumn', 7);
fishingBoat(3900, 'Autumn', 6);
fishingBoat(2000, 'Winter', 13);