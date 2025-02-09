//This function is responsible for checking if a given password is correct.
function passwordCheck(attempt) {
    //We store the correct password in a variable for easier changing in the future.
    let correctPassword = "s3cr3t!P@ssw0rd";

    if (attempt === correctPassword) {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}

passwordCheck("s3cr3t!P@ssw0rd");
passwordCheck("s3cr3t!p@ss");
passwordCheck("s3cr3t!P@ssw0rd");