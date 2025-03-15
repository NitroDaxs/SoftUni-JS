function series(input) {
  let budget = Number(input[0]);
  let seriesCount = Number(input[1]);
  let count = 2;
  let sum = 0;

  for (let i = 0; i < seriesCount; i++) {
    let seriesName = input[count];
    count++;
    let seriesPrice = Number(input[count]);
    count++;

    switch (seriesName) {
      case "Thrones":
        seriesPrice -= seriesPrice * 0.5;
        break;
      case "Lucifer":
        seriesPrice -= seriesPrice * 0.4;
        break;
      case "Protector":
        seriesPrice -= seriesPrice * 0.3;
        break;
      case "TotalDrama":
        seriesPrice -= seriesPrice * 0.2;
        break;
      case "Area":
        seriesPrice -= seriesPrice * 0.1;
        break;
    }

    budget -= seriesPrice;
    sum += seriesPrice;
  }

  if (budget >= 0) {
    console.log(
      `You bought all the series and left with ${budget.toFixed(2)} lv.`
    );
  } else {
    console.log(
      `You need ${(sum - input[0]).toFixed(2)} lv. more to buy the series!`
    );
  }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
