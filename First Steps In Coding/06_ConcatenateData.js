//This function prints a person's information on the console from the input data
function concentrateData(_firstName, _lastName, _age, _town) {
    let firstName = _firstName.toString();
    let lastName = _lastName.toString();
    let age = Number(_age);
    let town = _town.toString();
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

concentrateData("Maria", "Ivanova", 20, "Sofia")