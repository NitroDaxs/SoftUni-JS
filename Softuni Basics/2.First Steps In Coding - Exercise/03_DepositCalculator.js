function depositCalc(depositSum, depositTime, increasePercent) {
    let interest = depositSum * (increasePercent / 100);
    let monthlyInterest = interest / 12;
    let totalSum = parseFloat(depositSum + monthlyInterest * depositTime);
    console.log(totalSum);
}

depositCalc("200", "3", "5.7");
depositCalc("2350", "6", "7");