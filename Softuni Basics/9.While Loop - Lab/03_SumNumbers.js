//This function finds the sum of a given sequence of numbers.
function sum(input){
    let sumToFind = Number(input[0]);
    let count = 1;
    let sum = 0;
    while (sum < sumToFind) {
        sum += Number(input[count]);
        count++;
    }
    console.log(sum);
}

sum(["100",
    "10",
    "20",
    "30",
    "40"]);