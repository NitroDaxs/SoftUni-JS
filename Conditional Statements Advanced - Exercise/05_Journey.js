function vacation(budget, season) {
    let destination = '';
    let price = 0.0;
    let accomodationType = '';

    if (budget <= 100) {
        destination = 'Bulgaria';

    }
    else if (budget <= 1000) {
        destination = 'Balkans';
    }
    else {
        destination = 'Europe';
    }

    switch (season) {
        case 'summer':
            if (destination === 'Bulgaria') {
                price = budget * 0.3;
                accomodationType = 'Camp';
            }
            else if (destination === 'Balkans') {
                price = budget * 0.4;
                accomodationType = 'Camp';
            }
            else if (destination === 'Europe') {
                price = budget * 0.9;
                accomodationType = 'Hotel';
            }
            break;
        case 'winter':
            if (destination === 'Bulgaria') {
                price = budget * 0.7;
            }
            else if (destination === 'Balkans') {
                price = budget * 0.8;
            }
            else if (destination === 'Europe') {
                price = budget * 0.9;
            }
            accomodationType = 'Hotel';
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodationType} - ${price.toFixed(2)}`);
}

vacation(50, 'summer');
vacation(75, 'winter');