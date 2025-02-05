function bonusPoints(input) {
    let bonus = 0.0;

    if (input <= 100) {
        bonus += 5;
    }
    else if (input > 100 && input <= 1000) {
        bonus += input * 0.20;
    }
    else if (input > 1000) {
        bonus += input * 0.10;
    }

    if (input % 2 == 0) {
        bonus += 1;
    }

    if (input.toString().slice(-1) == 5) {
        bonus += 2;
    }

    console.log(bonus)
    console.log(input + bonus)
}

bonusPoints(20);
bonusPoints(175);
bonusPoints(2703);