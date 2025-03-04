function food(input) {
  let days = Number(input[0]);
  let totalDailyFood = Number(input[1]);
  let totalBuisquit = 0;
  let count = 2;
  let catFoodTotal = 0;
  let dogFoodTotal = 0;

  for (let i = 1; i <= days; i++) {
    let dogFood = Number(input[count]);
    count++;
    let catFood = Number(input[count]);
    count++;
    catFoodTotal += catFood;
    dogFoodTotal += dogFood;

    if (i % 3 === 0) {
      totalBuisquit += Math.round((catFood + dogFood) * 0.1);
    }
  }
  let totalEaten = dogFoodTotal + catFoodTotal;
  console.log(`Total eaten biscuits: ${totalBuisquit}gr.`);
  console.log(
    `${((totalEaten / totalDailyFood) * 100).toFixed(
      2
    )}% of the food has been eaten.`
  );
  console.log(
    `${((dogFoodTotal / totalEaten) * 100).toFixed(2)}% eaten from the dog.`
  );
  console.log(
    `${((catFoodTotal / totalEaten) * 100).toFixed(2)}% eaten from the cat.`
  );
}

food(["3", "500", "100", "30", "110", "25", "120", "35"]);
