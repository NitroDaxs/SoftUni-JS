//This function is responsible for finding the area of a given figure.
function areaOfFigures(figure, a, b) {
    let area = 0;
    switch (figure) {
        case 'square':
            area = a * a;
            break;
        case 'rectangle':
            area = a * b;
            break;
        case 'circle':
            area = Math.PI * a * a;
            break;
        case 'triangle':
            area = (a * b) / 2;
            break;
    }

    console.log(area.toFixed(3));
}

areaOfFigures('square', 5);
areaOfFigures('rectangle', 7, 2.5);
areaOfFigures('circle', 6);
areaOfFigures('triangle', 4.5, 20);