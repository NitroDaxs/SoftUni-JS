//This function reads text until "Stop" is entered.
function readText(input){
    let count = 0;
    while (input[count] !== 'Stop') {
        console.log(input[count]);
        count ++;
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);