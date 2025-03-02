function shop(input){
    let budget = input[0];
    let count =1;
    let productCount=0;
    let sum =0;

    while(input[count] !== 'Stop'){
        if(isNaN(input[count])){
            count++;
        }

        if(!isNaN(input[count])){
            productCount++;
            if(productCount% 3 === 0){
                input[count] *= 0.5;
            }
            let price = Number(input[count]);
            sum+= price;
            count++;
        } 

        if(sum > budget){
            break;
        }
    }

    if(sum <= budget){
        console.log(`You bought ${productCount} products for ${sum.toFixed(2)} leva.`)
    }
    else{
        console.log(`You don't have enough money!`);
        console.log(`You need ${Math.abs(budget - sum).toFixed(2)} leva!`);
    }
}

shop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"]);