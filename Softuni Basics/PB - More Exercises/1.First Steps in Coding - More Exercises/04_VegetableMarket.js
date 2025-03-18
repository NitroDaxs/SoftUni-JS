function market(pricePerKgVeg, pricePerKgFruit, kgVeg, kgFruit) {
  console.log(
    ((pricePerKgFruit * kgFruit + pricePerKgVeg * kgVeg) / 1.94).toFixed(2)
  );
}

market(0.194, 19.4, 10, 10);
