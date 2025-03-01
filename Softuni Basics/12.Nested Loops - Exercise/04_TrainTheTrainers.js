function training(input){
    let subject ='';
    let score = 0;
    let totalScore = 0;
    let count =1;
    let presentationCount =0;

    while(true){
        if(input[count] === "Finish") {
            break;
        }
        for (let i = 1; i <= input[0] ; i++) {
            if(input[count] === "Finish") {
                break;
            }

            if(isNaN(input[count])){
                subject = input[count];
                presentationCount++;
                count++;
            }

            if(!isNaN(input[count])){
                score += Number(input[count]);
                count++;
            }
        }
        console.log(`${subject} - ${(score / input[0]).toFixed(2)}.`);
        subject = '';
        totalScore += score / input[0];
        score = 0;
    }

    
    console.log(`Student's final assessment is ${(totalScore / presentationCount).toFixed(2)}.`);
}

training(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);