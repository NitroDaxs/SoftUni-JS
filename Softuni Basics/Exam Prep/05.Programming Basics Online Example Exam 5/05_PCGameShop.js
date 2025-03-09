function shop(input) {
  let numberOfGames = Number(input[0]);
  let hearthStoneCount = 0;
  let fortniteCount = 0;
  let overWatchCount = 0;
  let otherCount = 0;

  for (let i = 1; i <= numberOfGames; i++) {
    let gameName = input[i];
    switch (gameName) {
      case "Hearthstone":
        hearthStoneCount++;
        break;
      case "Fornite":
        fortniteCount++;
        break;
      case "Overwatch":
        overWatchCount++;
        break;
      default:
        otherCount++;
        break;
    }
  }

  console.log(
    `Hearthstone - ${((hearthStoneCount / numberOfGames) * 100).toFixed(2)}%`
  );
  console.log(
    `Fornite - ${((fortniteCount / numberOfGames) * 100).toFixed(2)}%`
  );
  console.log(
    `Overwatch - ${((overWatchCount / numberOfGames) * 100).toFixed(2)}%`
  );
  console.log(`Others - ${((otherCount / numberOfGames) * 100).toFixed(2)}%`);
}

shop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);

shop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
