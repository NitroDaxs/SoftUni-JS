function bestPlayer(input) {
  let bestPlayer = "";
  let bestGoals = 0;
  let count = 0;

  while (input[count] !== "END") {
    let player = input[count];
    count++;
    let currentGoals = Number(input[count]);
    count++;

    if (currentGoals > bestGoals) {
      bestGoals = currentGoals;
      bestPlayer = player;
    }

    if (bestGoals >= 10) {
      console.log(`${player} is the best player!`);
      console.log(
        `He has scored ${currentGoals} goals and made a hat-trick !!!`
      );
      return;
    }
  }

  if (bestGoals >= 3) {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${bestGoals} goals.`);
  }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
