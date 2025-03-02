function fruitMarket(strawberriePrice, bannanaKg, orangeKg, raspberryKg, strawberryKg) {
    let raspberryPrice = strawberriePrice / 2;
    let orangePrice = raspberryPrice - raspberryPrice * 0.40;
    let bannanaPrice = raspberryPrice - raspberryPrice * 0.80;

    let raspberrySum = raspberryKg * raspberryPrice;
    let orangeSum = orangeKg * orangePrice;
    let bannanaSum = bannanaKg * bannanaPrice;
    let strawberrySum = strawberryKg * strawberriePrice;

    let totalSum = raspberrySum + orangeSum + bannanaSum + strawberrySum;

    console.log(totalSum.toFixed(2));
}

fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7);