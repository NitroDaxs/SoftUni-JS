function trainingLab(w, h) {
  let widthInCm = w * 100;
  let heightInCm = h * 100 - 100;

  let workStationsPerRow = Math.floor(heightInCm / 70);
  let totalColumns = Math.floor(widthInCm / 120);
  let totalWorkStations = workStationsPerRow * totalColumns;

  console.log(totalWorkStations - 3);
}

trainingLab(15, 8.9);
