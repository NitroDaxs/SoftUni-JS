function familyTrip(budget, nights, price, misc) {
  let total = nights * price;

  if (nights > 7) {
    total -= total * 0.05;
  }
  total += budget * (misc / 100);

  if (budget >= total) {
    console.log(
      `Ivanovi will be left with ${(budget - total).toFixed(
        2
      )} leva after vacation.`
    );
  } else {
    console.log(`${(total - budget).toFixed(2)} leva needed.`);
  }
}

familyTrip(800.5, 8, 100, 2);
