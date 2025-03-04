function booster(fruit, size, count) {
  let watermelon = 0;
  let mango = 0;
  let ananas = 0;
  let rasberry = 0;
  let totalSum = 0;
  let fruitCount = 0;

  switch (size) {
    case "small":
      fruitCount = 2;
      watermelon = 56;
      mango = 36.66;
      ananas = 42.1;
      rasberry = 20;
      break;
    case "big":
      fruitCount = 5;
      watermelon = 28.7;
      mango = 19.6;
      ananas = 24.8;
      rasberry = 15.2;
      break;
  }

  switch (fruit) {
    case "Watermelon":
      totalSum += fruitCount * watermelon;
      break;
    case "Mango":
      totalSum += fruitCount * mango;
      break;
    case "Pineapple":
      totalSum += fruitCount * ananas;
      break;
    case "Raspberry":
      totalSum += fruitCount * rasberry;
      break;
  }

  totalSum *= count;

  if (totalSum >= 400 && totalSum <= 1000) {
    totalSum -= totalSum * 0.15;
  } else if (totalSum > 1000) {
    totalSum -= totalSum * 0.5;
  }

  console.log(`${totalSum.toFixed(2)} lv.`);
}

booster(`Watermelon`, `big`, 4);
