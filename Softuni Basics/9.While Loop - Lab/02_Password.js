//This function is responsible for checking if a given password is correct.
function password(input){
    let username = input[0];
    let password = input[1];
    let count = 2;
    while(password !== input[count]){
        count++;
    }
    return console.log(`Welcome ${username}!`);
}

