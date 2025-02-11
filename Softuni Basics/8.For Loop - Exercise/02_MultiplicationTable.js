//This function prints the multiplication table of a given number.
function multiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${input} = ${input * i}`);

    }
}
multiplicationTable(5);