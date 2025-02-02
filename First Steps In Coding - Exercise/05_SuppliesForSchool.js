function schoolSupplies(penPackets, markerPackets, cleaningSolutionLiters, discount) {
    const penPrice = 5.80;
    const markerPrice = 7.20;
    const cleaningSolutionPrice = 1.20;

    let totalPenPrice = penPackets * penPrice;
    let totalMarkerPrice = markerPackets * markerPrice;
    let totalCleaningSolutionPrice = cleaningSolutionLiters * cleaningSolutionPrice;

    let totalSum = totalPenPrice + totalMarkerPrice + totalCleaningSolutionPrice;
    let discountedSum = totalSum * discount / 100;

    console.log(totalSum - discountedSum);
}

schoolSupplies("2", "3", "4", "25");