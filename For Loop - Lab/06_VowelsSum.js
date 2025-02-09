//This function calculates the sum of the vowels in a given string.
function vowelsSum(input) {
    let a = 1;
    let e = 2;
    let ii = 3;
    let o = 4;
    let u = 5;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a') {
            sum += a;
        }
        else if (input[i] == 'e') {
            sum += e;
        }
        else if (input[i] == 'i') {
            sum += ii;
        }
        else if (input[i] == 'o') {
            sum += o;
        }
        else if (input[i] == 'u') {
            sum += u;
        }
    }

    console.log(sum);
}

vowelsSum('hello');
vowelsSum('hi');