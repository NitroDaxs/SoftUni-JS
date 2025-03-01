function tickets(input){
    let count =0;
    let grandTotal= 0;
    let totalStudent =0;
    let totalStandard =0;
    let totalKid =0;    

    while(input[count] !== 'Finish'){
        let studentCount = 0;
        let standardCount = 0;
        let kidCount = 0;   
        let movie = input[count];
        count ++;
        let ticketCount = Number(input[count]);

        for (let i = 0; i < ticketCount; i++) {
            count ++;
            if(input[count] === 'End'){
                break;
            }
            if (input[count] === 'student') {
                studentCount ++;
            } else if (input[count] === 'standard') {
                standardCount ++;
            } else if (input[count] === 'kid') {
                kidCount ++;
            }
            
        }
        count ++;
        grandTotal += studentCount + standardCount + kidCount;

        console.log(`${movie} - ${(((standardCount + studentCount + kidCount) / ticketCount) * 100).toFixed(2)}% full.`);

        totalKid += kidCount;
        totalStandard += standardCount;
        totalStudent += studentCount;

        standardCount = 0;
        studentCount = 0;
        kidCount = 0;
    }
    
    console.log(`Total tickets: ${grandTotal}`);
    console.log(`${((totalStudent / grandTotal) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandard / grandTotal) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKid / grandTotal) * 100).toFixed(2)}% kids tickets.`);
}

tickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);