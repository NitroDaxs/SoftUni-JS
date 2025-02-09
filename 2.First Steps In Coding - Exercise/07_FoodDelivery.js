function foodCalculator(chickenMenus, fishMenus, vegeterianMenus) {
    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegeterianPrice = 8.15;
    const deliveryPrice = 2.5;

    chickenMenus = parseFloat(chickenMenus);
    fishMenus = parseFloat(fishMenus);
    vegeterianMenus = parseFloat(vegeterianMenus);

    let totalChickenPrice = chickenMenus * chickenPrice;
    let totalFishPrice = fishMenus * fishPrice;
    let totalVegeterianPrice = vegeterianMenus * vegeterianPrice;

    let totalSumWithotuDesert = totalChickenPrice + totalFishPrice + totalVegeterianPrice;
    let desert = totalSumWithotuDesert * 0.2;
    let totalSum = totalSumWithotuDesert + desert + deliveryPrice;

    console.log(totalSum);
}

foodCalculator("2", "4", "3");
foodCalculator("9", "2", "6");