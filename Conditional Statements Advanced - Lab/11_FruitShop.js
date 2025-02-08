//This function calculates the price of a fruit in a given day and quantity.
function fruitShop(fruit, day, quantity) {
    let finalSum = 0.0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana':
                    finalSum = 2.50 * quantity;
                    break;
                case 'apple':
                    finalSum = 1.20 * quantity;
                    break;
                case 'orange':
                    finalSum = 0.85 * quantity;
                    break;
                case 'grapefruit':
                    finalSum = 1.45 * quantity;
                    break;
                case 'kiwi':
                    finalSum = 2.70 * quantity;
                    break;
                case 'pineapple':
                    finalSum = 5.50 * quantity;
                    break;
                case 'grapes':
                    finalSum = 3.85 * quantity;
                    break;
                default:
                    console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana':
                    finalSum = 2.70 * quantity;
                    break;
                case 'apple':
                    finalSum = 1.25 * quantity;
                    break;
                case 'orange':
                    finalSum = 0.90 * quantity;
                    break;
                case 'grapefruit':
                    finalSum = 1.60 * quantity;
                    break;
                case 'kiwi':
                    finalSum = 3 * quantity;
                    break;
                case 'pineapple':
                    finalSum = 5.60 * quantity;
                    break;
                case 'grapes':
                    finalSum = 4.20 * quantity;
                    break;
                default:
                    console.log('error');
            }
            break;
        default:
            console.log('error');
    }

    if (finalSum > 0.0) {
        console.log(finalSum.toFixed(2));
    }
}

fruitShop('apple', 'Monday', '2');