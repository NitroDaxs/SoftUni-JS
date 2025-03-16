function party(price, notes, roses, keychains, drawings, luckys) {
  let noteSum = notes * 0.6;
  let roseSum = roses * 7.2;
  let keychainSum = keychains * 3.6;
  let drawingSum = drawings * 18.2;
  let luckySum = luckys * 22;
  let total = noteSum + roseSum + keychainSum + drawingSum + luckySum;

  if (notes + roses + keychains + drawings + luckys >= 25) {
    total -= total * 0.35;
  }

  total -= total * 0.1;

  if (total >= price) {
    console.log(`Yes! ${(total - price).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(price - total).toFixed(2)} lv needed.`);
  }
}

party(40.8, 20, 25, 30, 50, 10);
