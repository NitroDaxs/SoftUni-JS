function words(input) {
  let currentSum = 0;
  let biggestWord = 0;
  let word = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let word = input[i];
      if (word === "End of words") {
        break;
      }

      currentSum += word[j].charCodeAt();
    }
    if (
      input[i][0] === "a" ||
      input[i][0] === "e" ||
      input[i][0] === "i" ||
      input[i][0] === "o" ||
      input[i][0] === "u" ||
      input[i][0] === "y" ||
      input[i][0] === "A" ||
      input[i][0] === "E" ||
      input[i][0] === "I" ||
      input[i][0] === "O" ||
      input[i][0] === "U" ||
      input[i][0] === "Y"
    ) {
      currentSum = currentSum * input[i].length;
    } else {
      currentSum = Math.floor(currentSum / input[i].length);
    }

    if (currentSum > biggestWord) {
      biggestWord = currentSum;
      word = input[i];
      currentSum = 0;
    } else {
      currentSum = 0;
    }
  }

  console.log(`The most powerful word is ${word} - ${biggestWord}`);
}

words(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
