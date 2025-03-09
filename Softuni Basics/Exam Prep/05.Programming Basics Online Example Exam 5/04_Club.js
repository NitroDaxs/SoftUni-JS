function club(input) {
  let neededMoney = Number(input[0]);
  let count = 1;
  let totalMoney = 0;

  while (input[count] !== "Party!") {
    let currentDrink = input[count];
    count++;
    let bevaregeCount = Number(input[count]);
    count++;
    let currentSum = bevaregeCount * Number(currentDrink.length);
    if (currentSum % 2 !== 0) {
      currentSum -= currentSum * 0.25;
    }
    totalMoney += currentSum;

    if (totalMoney >= neededMoney) {
      console.log("Target acquired.");
      console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);
      break;
    }

    currentSum = 0;
  }

  if (totalMoney < neededMoney) {
    console.log(`We need ${(neededMoney - totalMoney).toFixed(2)} leva more.`);
    console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);
  }
}

club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
