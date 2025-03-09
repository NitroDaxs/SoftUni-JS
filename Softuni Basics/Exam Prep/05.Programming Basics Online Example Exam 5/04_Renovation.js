function painting(input) {
  let height = Number(input[0]);
  let width = Number(input[1]);
  let area = height * width * 4;
  let percentegeOfNonPaint = Number(input[2]) / 100;
  area -= area * percentegeOfNonPaint;
  let count = 3;
  let totalPaint = 0;

  while (input[3] !== "Tired!") {
    let currentBucket = Number(input[count]);
    totalPaint += currentBucket;
    area -= currentBucket;
    count++;
    if (area <= 0) {
      break;
    }
    if (input[count] === "Tired!") {
      console.log(`${area} quadratic m left.`);
      break;
    }
  }

  if (
    totalPaint ===
    height * width * 4 - height * width * 4 * percentegeOfNonPaint
  ) {
    console.log(`All walls are painted! Great job, Pesho!`);
  } else if (area <= 0) {
    console.log(
      `All walls are painted and you have ${Math.abs(area)} l paint left!`
    );
  }
}

painting(["2", "3", "25", "6", "4", "8"]);
