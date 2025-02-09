//This function calculates if the budget is enough and prints the appropriate message.
function movieBudget(budget, statists, clothesPrice) {
    let decor = budget * 0.10;

    if (statists > 150) {
        clothesPrice -= clothesPrice * 0.10;
    }

    let totalClothesPrice = statists * clothesPrice;
    let totalSum = decor + totalClothesPrice;

    if (totalSum > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    }
}

movieBudget(20000, 120, 55.5);
movieBudget(9587.88, 222, 55.68);
movieBudget(15437.62, 186, 57.99);