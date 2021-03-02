function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];


function generatePassword(){
    let password = "";
    let pwLength = 8 //window.prompt("Password length");
    for (i = 0; i < pwLength; i++){
    }
    console.log(charsLower[getRandom(charsLower.length)]);
}


var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword)