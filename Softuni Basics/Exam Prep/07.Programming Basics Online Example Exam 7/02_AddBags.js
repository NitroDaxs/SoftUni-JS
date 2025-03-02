function bags(input) {
    let luggagePrice = 0;
    priceOver20kg = Number(input[0]);
    luggageWeight = Number(input[1]);
    days = Number(input[2]);
    luggageCount = Number(input[3]);
     
    if(luggageWeight < 10){
        luggagePrice = priceOver20kg * 0.20;
    }
    else if(luggageWeight >= 10 && luggageWeight <= 20){
        luggagePrice = priceOver20kg * 0.50;
    }
    else if(luggageWeight > 20){
        luggagePrice = priceOver20kg;
    }

    if(days > 30){
        luggagePrice +=  luggagePrice * 0.10;
    }
    else if(7 <= days && days <= 30){
        luggagePrice += luggagePrice * 0.15;
    }
    else if(days < 7){
        luggagePrice += luggagePrice * 0.40;
    }
    console.log(`The total price of bags is: ${(luggagePrice * luggageCount).toFixed(2)} lv.`);
}

bags([30,
    18,
    15,
    2])
