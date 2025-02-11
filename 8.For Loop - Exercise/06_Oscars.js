//This function calculates the points for a given actor.
function points(input) {
    let totalPoints = 0;
    let academyPoints = Number(input[1])

    totalPoints += academyPoints;
    for (let i = 3; i < input.length; i++) {
        let points = Number(input[i]);
        if (i % 2 === 0) {
            let count = input[i - 1].length;
            totalPoints += points * count / 2;
        }

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${input[0]} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break
        }
    }

    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${input[0]} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);

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
    "39"]);