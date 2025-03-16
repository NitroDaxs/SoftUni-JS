function pinCodes(input) {
  let validPins = [];
  let n1Max = Number(input[0]);
  let n2Max = Number(input[1]);
  let n3Max = Number(input[2]);
  for (let i = 1; i <= n1Max; i++) {
    for (let j = 1; j <= n2Max; j++) {
      for (let k = 1; k <= n3Max; k++) {
        if (i % 2 === 0 && k % 2 === 0) {
          if (j === 2 || j === 3 || j === 5 || j === 7) {
            validPins.push(`${i} ${j} ${k}`);
          }
        }
      }
    }
  }

  console.log(validPins.join("\n"));
}

pinCodes(["3", "5", "5"]);
