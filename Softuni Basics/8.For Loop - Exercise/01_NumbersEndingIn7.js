//This function prints all the numbers from 1 to 1000 that end with 7.
function numEndingWith7() {
    for (let i = 0; i < 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}