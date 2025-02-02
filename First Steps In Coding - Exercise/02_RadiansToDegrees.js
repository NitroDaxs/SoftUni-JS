function radiusToDegrees(input) {
    let radians = Number(input);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}

radiusToDegrees("3.1416");
radiusToDegrees("6.2832");