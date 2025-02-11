//This function prints the amount of money saved or not saved.
function moneySaved(age, preceOfApplience, preceOfToy) {
    let sum = 0;
    let toyCount = 0;
    let birthdayMoney = 10;
    let brotherStealing = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sum += birthdayMoney;
            birthdayMoney += 10;
            brotherStealing++;
        } else {
            toyCount++;
        }
    }

    sum += toyCount * preceOfToy - brotherStealing;

    if (sum >= preceOfApplience) {
        console.log(`Yes! ${(sum - preceOfApplience).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(preceOfApplience - sum).toFixed(2)}`);
    }
}

moneySaved(21, 1200, 2);
moneySaved(10, 170, 6);