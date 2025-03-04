function climbers(input) {
  let musalaCount = 0;
  let monblanCount = 0;
  let kilimanjaroCount = 0;
  let k2Count = 0;
  let everestCount = 0;

  for (let i = 1; i < input.length; i++) {
    let climbers = Number(input[i]);

    if (climbers <= 5) {
      musalaCount += climbers;
    } else if (climbers >= 6 && climbers <= 12) {
      monblanCount += climbers;
    } else if (climbers >= 13 && climbers <= 25) {
      kilimanjaroCount += climbers;
    } else if (climbers >= 26 && climbers <= 40) {
      k2Count += climbers;
    } else {
      everestCount += climbers;
    }
  }

  let total =
    musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount;

  console.log(`${((musalaCount / total) * 100).toFixed(2)}%`);
  console.log(`${((monblanCount / total) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaroCount / total) * 100).toFixed(2)}%`);
  console.log(`${((k2Count / total) * 100).toFixed(2)}%`);
  console.log(`${((everestCount / total) * 100).toFixed(2)}%`);
}
