function tournament(input) {
  let days = input[0];
  let count = 1;
  let wins = 0;
  let losses = 0;
  let winsTotal = 0;
  let lossesTotal = 0;
  let dailySum = 0;
  let sum = 0;

  for (let i = 1; i <= days; i++) {
    while (input[count] !== "Finish") {
      count++;
      let result = input[count];

      if (result === "win") {
        wins++;
        dailySum += 20;
      } else {
        losses++;
      }
      count++;
    }

    sum += dailySum;
    if (wins > losses) {
      sum += dailySum * 0.1;
    }

    winsTotal += wins;
    lossesTotal += losses;
    wins = 0;
    losses = 0;
    dailySum = 0;
    count++;
  }

  if (winsTotal > lossesTotal) {
    sum += sum * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${sum.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${sum.toFixed(2)}`
    );
  }
}

tournament([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
