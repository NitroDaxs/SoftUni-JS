//This function calculates the total sum and prints the appropriate message.
function toyShop(vacationPrice, puzzleCount, dollsCount, bearsCount, minionsCount, trucksCount) {
    const puzzlePrice = 2.60;
    const dollPrice = 3;
    const bearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2;

    let totalPuzzlePrice = puzzleCount * puzzlePrice;
    let totalDollPrice = dollPrice * dollsCount;
    let totalBearPrice = bearPrice * bearsCount;
    let totalMinionPrice = minionPrice * minionsCount;
    let totalTruckPrice = truckPrice * trucksCount;

    let totalCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let totalSum = totalPuzzlePrice + totalDollPrice + totalBearPrice + totalMinionPrice + totalTruckPrice;

    if (totalCount >= 50) {
        totalSum -= totalSum * 0.25;
    }

    totalSum -= totalSum * 0.10;

    if (totalSum >= vacationPrice) {
        console.log(`Yes! ${(totalSum - vacationPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(vacationPrice - totalSum).toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);
toyShop(175, 9, 2, 2, 4, 11);
toyShop(120, 3, 10, 5, 6, 3);