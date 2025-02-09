function points(input) {
    let totalPoints = 0;
    let academyPoints = Number(input[1])
    let audience = Number(input[2]);

    for (let i = 3; i < input.length; i++) {
        let points = Number(input[i]);
        if (points !== NaN) {
            totalPoints += points;
        }
    }
}

points(["Zahari Baharov",
    "205",
    4,
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])