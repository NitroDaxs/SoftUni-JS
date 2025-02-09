//This function calculates the commission for a product in a given city.
function tradeCommisions(city, soldProduct) {
    let commission = 0.0;

    if (soldProduct > 0) {

        switch (city) {
            case 'Sofia':
                if (soldProduct <= 500) {
                    commission += soldProduct * 0.05;
                }
                else if (soldProduct > 500 && soldProduct <= 1000) {
                    commission += soldProduct * 0.07;
                }
                else if (soldProduct > 1000 && soldProduct <= 10000) {
                    commission += soldProduct * 0.08;
                }
                else if (soldProduct > 10000) {
                    commission += soldProduct * 0.12;
                }
                break;
            case 'Varna':
                if (soldProduct <= 500) {
                    commission += soldProduct * 0.045;
                }
                else if (soldProduct > 500 && soldProduct <= 1000) {
                    commission += soldProduct * 0.075;
                }
                else if (soldProduct > 1000 && soldProduct <= 10000) {
                    commission += soldProduct * 0.10;
                }
                else if (soldProduct > 10000) {
                    commission += soldProduct * 0.13;
                }
                break;
            case 'Plovdiv':
                if (soldProduct <= 500) {
                    commission += soldProduct * 0.055;
                }
                else if (soldProduct > 500 && soldProduct <= 1000) {
                    commission += soldProduct * 0.08;
                }
                else if (soldProduct > 1000 && soldProduct <= 10000) {
                    commission += soldProduct * 0.12;
                }
                else if (soldProduct > 10000) {
                    commission += soldProduct * 0.145;
                }
                break;
            default:
                console.log('error');
        }
        if (commission > 0) {
            console.log(commission.toFixed(2));
        }
    }
    else {
        console.log('error');
    }
}

tradeCommisions('Kashpichan', -50);
tradeCommisions('Varna', 3874.50);
tradeCommisions('Plovdiv', 499.99);
tradeCommisions('Sofia', 1500);
tradeCommisions('Bourgas', 1500);
