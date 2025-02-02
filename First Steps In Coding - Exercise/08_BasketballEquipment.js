function basketBallEquipment(yearlyFee) {
    const basketBallShoes = 0.60;
    const basteBallClothes = 0.80;
    const basketBallBall = 0.25;
    const basketBallAccesorries = 0.20;
    yearlyFee = Number(yearlyFee);

    let basketBallShoesPrice = yearlyFee * basketBallShoes;
    let basketBallClothesPrice = basketBallShoesPrice * basteBallClothes;
    let basketBallPrice = basketBallClothesPrice * basketBallBall;
    let basketBallAccesorriesPrice = basketBallPrice * basketBallAccesorries;

    let totalPrice = yearlyFee + basketBallShoesPrice + basketBallClothesPrice + basketBallPrice + basketBallAccesorriesPrice;

    console.log(totalPrice);
}

basketBallEquipment("365");
basketBallEquipment("550");