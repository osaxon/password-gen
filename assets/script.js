var passwordBox = document.getElementById("password-box");

// Generate a random number
function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
var string = "";

function genRandString(){
    // variable to store set of characters to be used in password
    var string = "";
    // final password taken from string variable
    

    // user specifies length of PW
    var pwLength = window.prompt("Please specify the length of the password (between 8 and 128");
    if (pwLength > 7 && pwLength < 129) {

        // user specifies what type of characters to include. Stored as boolean values and used in conditional statements
        var optionUpperAndLower = window.confirm("Click confirm to include upper and lower case characters (cancel for lower only");
        var optionSpecChars = window.confirm("Click confirm to include special characters");
        var optionNumbers = window.confirm("Click confirm to include numbers");

        // build string variable with character types as specified by user
        for (i = 0; i < pwLength * 2; i++){
            // include upper and lowercase
            if (optionUpperAndLower){
                string += charsUpper[getRandom(charsUpper.length)];
                string += charsLower[getRandom(charsLower.length)];
            } else {
                string += charsLower[getRandom(charsLower.length)];
            }
            // include special characters
            if (optionSpecChars){
                string += specChars[getRandom(specChars.length)];
            }
            // include numbers
            if (optionNumbers){
                string += getRandom(9);
            }
        } 

    // does not meet length criteria
    } else {
        window.alert("Please enter between 8 and 128");
        genRandString();
    }
    
    createPW(pwLength, string);
}

function createPW(length,string){
    var finalPW = "";
    for (i = 0; i < length; i++){
        finalPW += string[getRandom(string.length)];
        }
    // write PW to HTML file
    if(finalPW.length == length){
        console.log(finalPW);
        console.log(string);
        passwordBox.innerHTML = finalPW;
    }

    }


    

var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", genRandString)