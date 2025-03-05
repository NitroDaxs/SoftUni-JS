function suitcases(input) {
  let capacity = input[0];
  let count = 1;
  let suitcaseCount = 0;
  let isFull = false;

  while (input[count] !== "End") {
    let suitcase = Number(input[count]);
    if (capacity <= 0 || suitcase > capacity) {
      isFull = true;
      break;
    }
    count++;
    suitcaseCount++;
    if (suitcaseCount % 3 === 0) {
      suitcase += suitcase * 0.1;
    }
    capacity -= suitcase;
  }

  if (isFull === false) {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
  } else {
    console.log(`No more space!`);
    console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
  }
}

suitcases(["700.5", "180", "340.6", "126", "220"]);
