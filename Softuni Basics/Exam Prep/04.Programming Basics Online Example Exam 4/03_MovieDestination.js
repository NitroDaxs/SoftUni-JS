function movieDestination(budget, destination, season, days) {
  let sum = 0;

  switch (season) {
    case "Winter":
      if (destination === "Dubai") {
        sum = 45000 * days - 45000 * days * 0.3;
      } else if (destination === "Sofia") {
        sum = 17000 * days + 17000 * days * 0.25;
      } else {
        sum = 24000 * days;
      }
      break;
    case "Summer":
      if (destination === "Dubai") {
        sum = 40000 * days - 40000 * days * 0.3;
      } else if (destination === "Sofia") {
        sum = 12500 * days + 12500 * days * 0.25;
      } else {
        sum = 20250 * days;
      }
      break;
  }

  if (sum <= budget) {
    console.log(
      `The budget for the movie is enough! We have ${(budget - sum).toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${(sum - budget).toFixed(2)} leva more!`);
  }
}

movieDestination(400000, "Sofia", "Winter", 20);
