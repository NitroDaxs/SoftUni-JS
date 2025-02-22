function examPreparation(input) {
    let examFailingScoreCount = Number(input[0]);
    let examFailedCount =0;
    let count = 1;
    let lastProbemSolved= '';
    let sum =0;
    let hasFailed = false;

    while (input[count] !== 'Enough') {
        lastProbemSolved = input[count];
        count++;
        let grade =Number(input[count]);
        if (grade <= 4) {
            examFailedCount++;
        }
        if (examFailedCount === examFailingScoreCount) {
            console.log(`You need a break, ${examFailedCount} poor grades.`);
            hasFailed = true;
            break;
        }
        sum += grade;
        count++;
    }

    if (!hasFailed) {
        let average = sum / ((count - 1) / 2);
        console.log(`Average score: ${average.toFixed(2)}`); 
        console.log(`Number of problems: ${(count - 1) / 2}`); 
        console.log(`Last problem: ${lastProbemSolved}`); 
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);