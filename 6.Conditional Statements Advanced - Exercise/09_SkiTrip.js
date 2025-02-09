//This function calculates the accomodation price depending on the days, accomodation type and grade and prints it on the console.
function skiTrip(days, accomdationType, grade) {
    let nights = days - 1;
    let accomdationPrice = 0.0;

    switch (accomdationType) {
        case 'room for one person':
            accomdationPrice = 18 * nights;
            break;
        case 'apartment':
            accomdationPrice = 25 * nights;
            if (days < 10) {
                accomdationPrice -= accomdationPrice * 0.30;
            } else if (days >= 10 && days <= 15) {
                accomdationPrice -= accomdationPrice * 0.35;
            } else if (days > 15) {
                accomdationPrice -= accomdationPrice * 0.50;
            }
            break;
        case 'president apartment':
            accomdationPrice = 35 * nights;
            if (days < 10) {
                accomdationPrice -= accomdationPrice * 0.10;
            } else if (days >= 10 && days <= 15) {
                accomdationPrice -= accomdationPrice * 0.15;
            } else if (days > 15) {
                accomdationPrice -= accomdationPrice * 0.20;
            }
            break;
    }

    if (grade === 'positive') {
        accomdationPrice += accomdationPrice * 0.25;
    } else if (grade === 'negative') {
        accomdationPrice -= accomdationPrice * 0.10;
    }

    console.log(accomdationPrice.toFixed(2));
}

skiTrip(14, 'apartment', 'positive');