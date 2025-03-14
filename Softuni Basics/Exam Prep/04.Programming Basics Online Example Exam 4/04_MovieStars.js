function movieStars(input) {
  let budget = Number(input[0]);
  let count = 1;
  let sumNeeded = 0;

  while (input[count] !== "ACTION") {
    let name = input[count];
    count++;
    let salary = 0;

    if (name.length > 15) {
      budget -= budget * 0.2;
    } else {
      salary = Number(input[count]);
      count++;

      if (budget - salary < 0) {
        console.log(
          `We need ${Math.abs(budget - salary).toFixed(2)} leva for our actors.`
        );
        budget = 0;
        break;
      }

      budget -= salary;
      sumNeeded += salary;
    }
  }

  if (budget > 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  }
}

movieStars([
  "90000",
  "Christian Bale",
  "70000.50",
  "Leonard DiCaprio",
  "Kevin Spacey",
  "24000.99",
]);
