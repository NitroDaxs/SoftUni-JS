function capacity(lenght, width, height, percentage) {
    let volume = lenght * width * height;
    let totalLiters = volume / 1000;
    let percentageNumber = percentage / 100;
    let litersNeeded = totalLiters * (1 - percentageNumber);

    console.log(litersNeeded);
}

capacity("85", "75", "47", "17");
capacity("105", "77", "89", "18.5");