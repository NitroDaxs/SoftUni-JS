//This function takes the area of a yard and calculates the final price for greening it and the discount amount
function totalPriceCalc(_area) {
    const pricePerSquareMeter = 7.61;
    const discount = 0.18;
    let area = Number(_area);
    let totalPrice = area * pricePerSquareMeter;
    let discountAmount = area * pricePerSquareMeter * discount;

    console.log(`The final price is: ${totalPrice - discountAmount} lv.`);
    console.log(`The discount is: ${discountAmount} lv.`);
}

totalPriceCalc("550");