function scamOperators(contractLenght, contractType, addedIntenet, months){
    const oneYearSmall = 9.98;
    const oneYearMiddle = 18.00;
    const oneYearLarge = 25.98;
    const oneYearExtraLarge = 35.99;

    const twoYearSmall = 8.58;
    const twoYearMiddle = 17.09;
    const twoYearLarge = 23.59;
    const twoYearExtraLarge = 31.79;

    let monthlyFee =0;

    switch(contractLenght){
        case 'one':
            switch(contractType){
                case 'Small':
                    monthlyFee += oneYearSmall;
                break;
                case 'Middle':
                    monthlyFee += oneYearMiddle;
                break;
                case 'Large':
                    monthlyFee += oneYearLarge;
                break;
                case 'ExtraLarge':
                    monthlyFee += oneYearExtraLarge;
                break;
            }
        break;
        case 'two':
            switch(contractType){
                case 'Small':
                    monthlyFee += twoYearSmall;
                break;
                case 'Middle':
                    monthlyFee += twoYearMiddle;
                break;
                case 'Large':
                    monthlyFee += twoYearLarge;
                break;
                case 'ExtraLarge':
                    monthlyFee += twoYearExtraLarge;
                break;
            }
        break;
    }

    if(addedIntenet === 'yes'){
        switch(contractType){
            case 'Small':
                monthlyFee += 5.50;
            break;
            case 'Middle':
                monthlyFee += 4.35;
            break;
            case 'Large':
                monthlyFee += 4.35;
            break;
            case 'ExtraLarge':
                monthlyFee += 3.85;
            break;
        }
    }

    let total = monthlyFee * months;

    if(contractLenght === 'two'){
        total -= total * 0.0375
    }

    console.log((total).toFixed(2) + ' lv.');
}

scamOperators('two',
    'Large',
    'no',
    10);