function namesOFdevelopers(){
    const devs = ["Daniel ", "Tyler ", "Elijah ", "Corey"];
    return devs;
}

function numberOfdevelopers(){
    const number = 4;
    return number;
    }


function aboutDevelopers(){
    const num = numberOfdevelopers();
    const names = namesOFdevelopers();
    const aboutDevs = "There are " + num + " developers working on this project they are: " + names
    return aboutDevs;
    }

module.exports = numberOfdevelopers
module.exports = aboutDevelopers

