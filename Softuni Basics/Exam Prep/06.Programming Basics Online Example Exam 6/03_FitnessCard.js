function gymCard(budget, sex, age, sport) {
  let gym = 0;
  let boxing = 0;
  let yoga = 0;
  let zumba = 0;
  let dances = 0;
  let pilates = 0;
  let card = 0;

  switch (sex) {
    case "m":
      gym = 42;
      boxing = 41;
      yoga = 45;
      zumba = 34;
      dances = 51;
      pilates = 39;
      break;
    case "f":
      gym = 35;
      boxing = 37;
      yoga = 42;
      zumba = 31;
      dances = 53;
      pilates = 37;
      break;
  }

  switch (sport) {
    case "Gym":
      card = gym;
      break;
    case "Boxing":
      card = boxing;
      break;
    case "Yoga":
      card = yoga;
      break;
    case "Zumba":
      card = zumba;
      break;
    case "Dances":
      card = dances;
      break;
    case "Pilates":
      card = pilates;
      break;
  }

  if (age <= 19) {
    card -= card * 0.2;
  }

  if (budget >= card) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(card - budget).toFixed(
        2
      )} more.`
    );
  }
}
