function cinema(type, rows, cols) {
    let price = 0.0;

    switch (type) {
        case 'Premiere':
            price = rows * cols * 12;
            break;
        case 'Normal':
            price = rows * cols * 7.50;
            break;
        case 'Discount':
            price = rows * cols * 5;
            break;
    }

    console.log(`${price.toFixed(2)} leva`);
}

cinema('Discount', 12, 30);