function circleArea(r) {
  let area = Math.PI * r * r;
  let perimeter = 2 * Math.PI * r;

  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}

circleArea(3);
