function poolDay(peopleCount, fee, sunbedPrice, umbrellaPrice) {
  let totalEntranceFee = peopleCount * fee;
  let sunbedPriceTotal = Math.ceil(peopleCount * 0.75) * sunbedPrice;
  let umbrellaPriceTotal = Math.ceil(peopleCount / 2) * umbrellaPrice;

  console.log(
    (totalEntranceFee + sunbedPriceTotal + umbrellaPriceTotal).toFixed(2) +
      " lv."
  );
}

poolDay(21, 5.5, 4.4, 6.2);
