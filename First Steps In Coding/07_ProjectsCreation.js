//This function calculates the hours needed to complete a number of projects.
function projectsCalc(_firstName, _projectsCount) {
    let firstName = _firstName.toString();
    let projectsCount = Number(_projectsCount);
    let hours = 3 * projectsCount;
    console.log(`The architect ${firstName} will need ${hours} hours to complete ${_projectsCount} project/s.`)
}

projectsCalc("George", 4)