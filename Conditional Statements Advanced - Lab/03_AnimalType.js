//This function prints the type of an animal based on its input.
function animalType(input) {
    switch (input) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
    }
}

animalType('dog')
animalType('snake')