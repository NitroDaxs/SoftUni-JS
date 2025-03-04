function change(bitcoinCount, yenCount, commision) {
  let bitcoinPrice = 1168;
  let dollarPrice = 1.76;
  let yenPrice = dollarPrice * 0.15;
  let euroPrice = 1.95;

  let bitcoinTotal = bitcoinPrice * bitcoinCount;
  let yenTotal = yenPrice * yenCount;

  let sum = bitcoinTotal + yenTotal;

  sum -= sum * (commision / 100);

  let sumInEuro = sum / euroPrice;

  console.log(sumInEuro.toFixed(2));
}

change(1, 5, 5);
