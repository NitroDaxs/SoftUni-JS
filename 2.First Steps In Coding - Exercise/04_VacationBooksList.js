function bookReadTime(bookPagesNumber, bookPagePerHour, days) {
    let timeNeeded = bookPagesNumber / bookPagePerHour;
    let hoursPerDay = timeNeeded / days;
    console.log(hoursPerDay);
}

bookReadTime("212", "20", "2");
bookReadTime("432", "15", "4");