function dogFood(input) {
  let gramsOfFood = Number(input[0]) * 1000;
  let count = 1;

  while (input[count] !== "Adopted") {
    let currentMeal = input[count];
    count++;
    gramsOfFood -= currentMeal;
  }

  if (gramsOfFood >= 0) {
    console.log(`Food is enough! Leftovers: ${gramsOfFood} grams.`);
  } else {
    console.log(
      `Food is not enough. You need ${Math.abs(gramsOfFood)} grams more.`
    );
  }
}

dogFood(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
