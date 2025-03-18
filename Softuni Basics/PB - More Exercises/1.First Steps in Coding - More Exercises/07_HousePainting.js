function housePainting(x, y, h) {
  let greenPaint = 0;
  let redPaint = 0;

  let frontAndBack = x * x + x * x - 1.2 * 2;
  let sides = x * y + x * y - 1.5 * 1.5 * 2;
  let roof = x * y + x * y;
  let roofSupports = (x * h) / 2;
  roofSupports *= 2;

  greenPaint = (frontAndBack + sides) / 3.4;
  redPaint = (roof + roofSupports) / 4.3;

  console.log(greenPaint.toFixed(2));
  console.log(redPaint.toFixed(2));
}

housePainting(6, 10, 5.2);
