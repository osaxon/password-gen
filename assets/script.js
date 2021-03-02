function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];

function generatePassword(){
    var string = "";
    var finalPW = "";
    var pwLength = 12 //window.prompt("Password length");
    for (i = 0; i < pwLength; i++){
        var char1 = getRandom(charsLower.length)
        var char2 = getRandom(charsUpper.length)
        var char3 = getRandom(specChars.length)
        string += charsLower[char1];
        string += charsUpper[char2];
        string += specChars[char3];
    }

    for (i = 0; i < pwLength; i++){
        finalPW += string[getRandom(string.length)];
    }
    console.log(finalPW);
}


var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword)