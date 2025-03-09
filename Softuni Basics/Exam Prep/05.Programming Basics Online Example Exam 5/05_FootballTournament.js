function sportsSeason(input) {
  let teamName = input[0];
  let gamesPlayed = Number(input[1]);
  let wins = 0;
  let draws = 0;
  let losses = 0;

  for (let i = 2; i < gamesPlayed + 2; i++) {
    let currentResult = input[i];

    if (currentResult === "W") {
      wins++;
    } else if (currentResult === "D") {
      draws++;
    } else {
      losses++;
    }
  }

  if (gamesPlayed <= 0) {
    console.log(`${teamName} hasn't played any games during this season.`);
    return;
  }
  console.log(
    `${teamName} has won ${wins * 3 + draws * 1} points during this season.`
  );
  console.log("Total stats:");
  console.log(`## W: ${wins}`);
  console.log(`## D: ${draws}`);
  console.log(`## L: ${losses}`);
  console.log(`Win rate: ${((wins / gamesPlayed) * 100).toFixed(2)}%`);
}

sportsSeason([
  "Liverpool",
  "10",
  "W",
  "D",
  "D",
  "W",
  "L",
  "W",
  "D",
  "D",
  "W",
  "W",
]);

sportsSeason(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);

sportsSeason(["Chelsea", "0"]);
