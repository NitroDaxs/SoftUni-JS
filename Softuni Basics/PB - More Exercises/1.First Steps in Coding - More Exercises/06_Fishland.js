function fishland(
  mackerelPrice,
  sprinklePrice,
  palamudKg,
  saffronKg,
  musselsKg
) {
  let palamudPrice = mackerelPrice * 1.6;
  let saffronPrice = sprinklePrice * 1.8;
  let musslesPrice = 7.5;

  let palamudSum = palamudKg * palamudPrice;
  let saffronSum = saffronKg * saffronPrice;
  let musslesSum = musselsKg * musslesPrice;

  let totalSum = palamudSum + saffronSum + musslesSum;

  console.log(totalSum.toFixed(2));
}

fishland(6.9, 4.2, 1.5, 2.5, 1);
