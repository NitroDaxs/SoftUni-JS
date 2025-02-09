//This function calculates if the budget is enough and prints the appropriate message.
function pcParts(budget, videocards, processors, ramSticks) {
    const videocardPrice = 250;

    let videoCardTotalPrice = videocards * videocardPrice;
    let processorsTotalPrice = videoCardTotalPrice * 0.35 * processors;
    let ramSticksTotalPrice = videoCardTotalPrice * 0.10 * ramSticks;

    let totalPrice = videoCardTotalPrice + processorsTotalPrice + ramSticksTotalPrice;

    if (videocards > processors) {
        totalPrice -= totalPrice * 0.15;
    }

    if (totalPrice > budget) {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
    else {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }
}

pcParts(900, 2, 1, 3);
pcParts(920.45, 3, 1, 1);