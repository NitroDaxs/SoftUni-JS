function coffee(bevarage, sugar, count) {
  let baseEspresso = 0.9;
  let baseCappuccino = 1.0;
  let baseTea = 0.5;
  let sum = 0;

  if (sugar === "Normal") {
    baseEspresso += 0.1;
    baseCappuccino += 0.2;
    baseTea += 0.1;
  } else if (sugar === "Extra") {
    baseEspresso += 0.3;
    baseCappuccino += 0.6;
    baseTea += 0.2;
  } else if (sugar === "Without") {
    baseEspresso -= baseEspresso * 0.35;
    baseCappuccino -= baseCappuccino * 0.35;
    baseTea -= baseTea * 0.35;
  }

  switch (bevarage) {
    case "Espresso":
      sum += baseEspresso * count;
      break;
    case "Cappuccino":
      sum += baseCappuccino * count;
      break;
    case "Tea":
      sum += baseTea * count;
      break;
  }

  if (bevarage === "Espresso" && count >= 5) {
    sum -= sum * 0.25;
  }

  if (sum > 15) {
    sum -= sum * 0.2;
  }
  console.log(
    `You bought ${count} cups of ${bevarage} for ${sum.toFixed(2)} lv.`
  );
}
coffee("Espresso", "Without", 10);
