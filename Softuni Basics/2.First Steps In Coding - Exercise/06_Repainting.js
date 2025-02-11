function paintingJob(nailonAmount, paintAmount, thinnerAmount, hoursNeeded) {
    const nailonPrice = 1.5;
    const paintPrice = 14.5;
    const thinnerPrice = 5;

    nailonAmount = parseFloat(nailonAmount);
    paintAmount = parseFloat(paintAmount);
    thinnerAmount = parseFloat(thinnerAmount);
    hoursNeeded = parseFloat(hoursNeeded)

    let totalNailonPrice = nailonPrice * (nailonAmount + 2);
    let extraPaint = paintAmount * 0.1;
    let totalPaintPrice = paintPrice * (paintAmount + extraPaint);
    let totalThinnerPrice = thinnerAmount * thinnerPrice;
    let totalMaterialSum = totalNailonPrice + totalPaintPrice + totalThinnerPrice + 0.4;
    let totalWorkerSum = (totalMaterialSum * 0.3) * hoursNeeded;
    let finalSum = totalMaterialSum + totalWorkerSum;

    console.log(finalSum);
}

paintingJob("10", "11", "4", "8");
paintingJob("5", "10", "10", "1");