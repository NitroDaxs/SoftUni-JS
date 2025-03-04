function run(recordInSeconds, lenght, secondsPerMeter) {
  let total = secondsPerMeter * lenght;
  total += Math.floor(lenght / 50) * 30;

  if (total < recordInSeconds) {
    console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
  } else {
    console.log(
      `No! He was ${(total - recordInSeconds).toFixed(2)} seconds slower.`
    );
  }
}

run(5554.36, 1340, 3.23);
