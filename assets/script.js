function logMsg(){
    console.log("logged")
}

const charsLower = ['a','b','c','d'];
const charsUpper = charsLower.map(i => i.toUpperCase());
console.log(charsUpper, charsLower);

var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", logMsg)