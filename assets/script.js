function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];

function generatePassword(){
    var password = "";
    var pwLength = 12 //window.prompt("Password length");
    for (i = 0; i < pwLength; i++){
        var char = getRandom(charsLower.length)
        password += charsLower[char];
    }
    console.log(password)
}


var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword)