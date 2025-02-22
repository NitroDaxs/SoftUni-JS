function findBook(input){
    let bookToFind = input[0];
    let count = 1;

    while(input[count] !== 'No More Books'){
        if(input[count] === bookToFind){
            console.log(`You checked ${count - 1} books and found it.`);
            break;  
        }
        count++;
    }

    if(input[count] === 'No More Books'){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count - 1} books.`);
    }
}

findBook(['The Spot', 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify', 'No More Books']);