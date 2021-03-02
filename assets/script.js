var passwordBox = document.getElementById("password-box");

function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
var string = "";

function generatePassword(){
    var string = ""
    var finalPW = "";
    var pwLength = window.prompt("Please specify the length of the password (between 8 and 128");
    var optionUpperAndLower = window.confirm("Click confirm to include upper and lower case characters (cancel for lower only");
    var optionSpecChars = window.confirm("Click confirm to include special characters");
    var optionNumbers = window.confirm("Click confirm to include numbers");
    if (optionUpperAndLower){
    }

    for (i = 0; i < pwLength; i++){
        if (optionUpperAndLower){
            string += charsUpper[getRandom(charsUpper.length)];
            string += charsLower[getRandom(charsLower.length)];
        } else {
            string += charsLower[getRandom(charsLower.length)];
        }
        if (optionSpecChars){
            string += specChars[getRandom(specChars.length)];
        }
        if (optionNumbers){
            string += getRandom(9);
        }
        
    }
    console.log("Upper and lower option ::", optionUpperAndLower);
    console.log("Special chars option ::", optionSpecChars);
    console.log("Numbers option ::", optionNumbers);

    for (i = 0; i < pwLength; i++){
        finalPW += string[getRandom(string.length)];
    }
    console.log(finalPW);
    passwordBox.innerHTML = finalPW;
}



var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword)