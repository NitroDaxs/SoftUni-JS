function histogram(input) {
    let inputNum = Number(input[0]);
    let p1 = 0.0;
    let p2 = 0.0;
    let p3 = 0.0;
    let p4 = 0.0;
    let p5 = 0.0;

    for (let i = 1; i <= inputNum; i++) {
        let num = Number(input[i]);

        if (num < 200) {
            p1 += 1;
        } else if (num >= 200 && num <= 399) {
            p2 += 1;
        } else if (num >= 400 && num <= 599) {
            p3 += 1;
        } else if (num >= 600 && num <= 799) {
            p4 += 1;
        } else if (num >= 800) {
            p5 += 1;
        }
    }

    console.log(`${(p1 / inputNum * 100.0).toFixed(2)}%`);
    console.log(`${(p2 / inputNum * 100.0).toFixed(2)}%`);
    console.log(`${(p3 / inputNum * 100.0).toFixed(2)}%`);
    console.log(`${(p4 / inputNum * 100.0).toFixed(2)}%`);
    console.log(`${(p5 / inputNum * 100.0).toFixed(2)}%`);
}

histogram([3, 1, 2, 999]);