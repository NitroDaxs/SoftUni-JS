//This function calculates the total price of dog and cat food by a given quantity.
function zooStore(_dogFoodQuantity, _catFoodQuantity) {
    const dogFoodPrice = 2.50;
    const catFoodPrice = 4.00;
    let dogFoodQuantity = Number(_dogFoodQuantity);
    let catFoodQuantity = Number(_catFoodQuantity);

    let total = dogFoodPrice * dogFoodQuantity + catFoodPrice * catFoodQuantity;

    console.log(`${total} lv.`);
}

zooStore("5", "4");