function nameGame(input) {
  let count = 0;
  let playerOnePoints = 0;
  let playerTwoPoints = 0;
  let playerOneName = "";
  let playerTwoName = "";

  for (let i = 1; i <= 2; i++) {
    let name = input[count];

    for (let j = 0; j < name.length; j++) {
      count++;
      if (input[count] === "Stop") {
        break;
      }
      if (isNaN(input[count])) {
        break;
      }
      let points = Number(input[count]);
      if (i === 1) {
        playerOneName = name;
        if (name[j].charCodeAt() === points) {
          playerOnePoints += 10;
        } else {
          playerOnePoints += 2;
        }
      } else if (i === 2) {
        playerTwoName = name;
        if (name[j].charCodeAt() === points) {
          playerTwoPoints += 10;
        } else {
          playerTwoPoints += 2;
        }
      }
    }
    count++;
  }

  if (playerOnePoints > playerTwoPoints) {
    console.log(
      `The winner is ${playerOneName} with ${playerOnePoints} points!`
    );
  } else if (playerTwoPoints > playerOnePoints) {
    console.log(
      `The winner is ${playerTwoName} with ${playerTwoPoints} points!`
    );
  } else if (playerOnePoints === playerTwoPoints) {
    console.log(
      `The winner is ${playerTwoName} with ${playerTwoPoints} points!`
    );
  }
}

nameGame([
  "Pesho",
  "124",
  "34",
  "111",
  "97",
  "99",
  "Gosho",
  "98",
  "124",
  "88",
  "76",
  "18",
  "Stop",
]);
