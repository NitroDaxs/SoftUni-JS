
function sequence2k1(n) {
    let num = Number(n);
    let count = 1;
    while (count <= num) {
        console.log(count);
        count = count * 2 + 1;
    }
}

sequence2k1('8');
