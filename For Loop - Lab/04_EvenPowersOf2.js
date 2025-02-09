//This function prints the first N even powers of 2 on the console.
function powerOf2(n) {
    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}

powerOf2(6)