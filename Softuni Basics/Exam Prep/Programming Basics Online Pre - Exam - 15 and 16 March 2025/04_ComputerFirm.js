function computerFirm(input) {
  let pcCount = Number(input[0]);

  let count = 1;
  let rating = 0;
  let sales = 0;

  for (let i = 0; i < pcCount; i++) {
    let currentRating = Number(input[count].slice(-1));
    let salesPossibe = Number(input[count].slice(0, -1));

    switch (currentRating) {
      case 2:
        salesPossibe *= 0;
        break;
      case 3:
        salesPossibe *= 0.5;
        break;
      case 4:
        salesPossibe *= 0.7;
        break;
      case 5:
        salesPossibe *= 0.85;
        break;
      case 6:
        salesPossibe *= 1;
        break;
    }
    sales += salesPossibe;
    rating += currentRating;
    count++;
  }

  console.log(sales.toFixed(2));
  console.log((rating / pcCount).toFixed(2));
}

computerFirm(["3", "103", "103", "103"]);
