function excursionCalc(peopleCount, season) {
  let springPrice = 50;
  let summerPrice = 48.5;
  let autumnPrice = 60;
  let winterPrice = 86;

  let totalSum = 0;

  if (peopleCount > 5) {
    springPrice = 48;
    summerPrice = 45;
    autumnPrice = 49.5;
    winterPrice = 85;
  }
  switch (season) {
    case "spring":
      totalSum = peopleCount * springPrice;
      break;
    case "summer":
      totalSum = peopleCount * summerPrice;
      totalSum -= totalSum * 0.15;
      break;
    case "autumn":
      totalSum = peopleCount * autumnPrice;
      break;
    case "winter":
      totalSum = peopleCount * winterPrice;
      totalSum += totalSum * 0.08;
      break;
  }

  console.log(`${totalSum.toFixed(2)} leva.`);
}

excursionCalc(5, "spring");
