function graduationCalc(input){
    let studentName = input[0];
    let count = 1;
    let sum =0;
    let failCount = 0;
    let gradeCount =0;

    while (input.length > count) {
        let currentScore = Number(input[count]);
        count ++;
        gradeCount ++;
        if (currentScore < 4) {
            failCount ++; 
            break;
        }
        sum += currentScore;
    }

    let average = sum / gradeCount;
    if (failCount === 0) {
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${gradeCount} grade`);
    }
}


graduationCalc(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);