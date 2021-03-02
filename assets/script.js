var passwordBox = document.getElementById("password-box");

function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

function generatePassword(){
    var string = "";
    var finalPW = "";
    var pwLength = 12 //window.prompt("Password length");
    for (i = 0; i < pwLength; i++){
        var lower = getRandom(charsLower.length);
        var upper = getRandom(charsUpper.length);
        var spec = getRandom(specChars.length);
        var num = getRandom(numbers.length);
        string += charsLower[lower];
        string += charsUpper[upper];
        string += specChars[spec];
        string += numbers[num];
    }

    for (i = 0; i < pwLength; i++){
        finalPW += string[getRandom(string.length)];
    }
    console.log(finalPW);
    passwordBox.innerHTML = finalPW;
}


var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword)