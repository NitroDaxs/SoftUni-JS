function flowerPrice(flowerType, flowerCount, budget) {
    const rosePrice = 5.00;
    const dhaliaPrice = 3.80;
    const tulipPrice = 2.80;
    const narcissusPrice = 3.00;
    const gladiolusPrice = 2.50;

    let sum = 0.0;

    switch (flowerType) {
        case 'Roses':
            sum = flowerCount * rosePrice;
            if (flowerCount > 80) {
                sum -= sum * 0.1;
            }
            break;
        case 'Dahlias':
            sum = flowerCount * dhaliaPrice;
            if (flowerCount > 90) {
                sum -= sum * 0.15;
            }
            break;
        case 'Tulips':
            sum = flowerCount * tulipPrice;
            if (flowerCount > 80) {
                sum -= sum * 0.15;
            }
            break;
        case 'Narcissus':
            sum = flowerCount * narcissusPrice;
            if (flowerCount < 120) {
                sum += sum * 0.15;
            }
            break;
        case 'Gladiolus':
            sum = flowerCount * gladiolusPrice;
            if (flowerCount < 80) {
                sum += sum * 0.2;
            }
            break;
        default:
            break;
    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }
}

flowerPrice('Tulips', 88, 260);
