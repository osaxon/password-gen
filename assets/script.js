var passwordBox = document.getElementById("password-box");
var generateButton = document.getElementById("generate");

// Generate a random number
function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// available characters to be included in final PW
const charsLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const charsUpper = charsLower.map(i => i.toUpperCase());
const specChars = ['_','!','#','£','-','$'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
var fullCharArr = charsLower;

var pwLength = "";
var inclUpper = false;
var inclSpec = false;
var inclNum = false;
var finalPW = "";

// to hold a randomly generated array of alphanumeric and special characters, depending on user choice
var randArr = [];

// gets user input and creates an array of characters to be randomised
function setUp(){

    // reset variables
    finalPW = "";
    inclUpper = false;
    inclSpec = false;
    inclNum = false;
    randArr = [];

    // get user input for PW length
    pwLength = window.prompt("Please specify the length of the password (between 8 and 128)");
    if (pwLength > 7 && pwLength < 129){

        // get user input for characters to include in PW
        inclUpper = window.confirm("Click confirm to include upper and lowercase (cancel for lower only)");
        inclNum = window.confirm("Click confirm to include numbers");
        inclSpec = window.confirm("Click confirm to include special characters");

        // add uppercase to the full array
        if(inclUpper){
            fullCharArr = fullCharArr.concat(charsUpper);
        };

        // add numbers to the full array
        if(inclNum){
            fullCharArr = fullCharArr.concat(numbers);
        };

        // add special characters to the full array
        if(inclSpec){
            fullCharArr = fullCharArr.concat(specChars);
        };

        // generate a random array from the full array
        genRandArr(fullCharArr);

        // length criteria not met
    } else {
        window.alert("Please enter between 8 and 128");
        // re run set up
        setUp();
    }
}

// randomises the array generated in the set up
function genRandArr(array){
    for(i = 0; i < array.length; i++){
        randArr.push(array[getRandom(array.length)]);
    };
    createPW(pwLength, randArr);
};

// creates a password of the specified length from the randomised array
function createPW(length,arr){

    // resets final password variable - needed in case criteria checks fail
    finalPW = "";

    for (i = 0; i < length; i++){
        finalPW += arr[getRandom(arr.length)];
        };

    // once length of password matches the specified length
    if(finalPW.length == length){
        // run checks against expected character type criteria
        if(confirmCriteria(finalPW)){
            // write the final password to the page
            writePW(finalPW);
        } else {
            // re-try if criteria checks fail
            console.log("Generating new PW");
            createPW(pwLength, randArr);
        };
    };
    };

// writes password to the page
function writePW(pw){
    console.log("writePW")
    passwordBox.innerHTML = pw;
    return;
};

// checks the generated password contains one or more characters from the chosen types
function confirmCriteria(p){

    // test results must all be true for the function to return true
    var numTest = false;
    var specTest = false;
    var upperLowerTest = false;

    // iterates through the generated password passed into the function and tests against each of the array types that have been confirmed to be included
    for(i = 0; i < p.length; i++){
        var char = p.charAt(i);
        var regex = new RegExp(char);

        // if the user wanted numbers, confirm the password contains a number
        if(inclNum){
            if(regex.test(numbers.toString())){
                // passes test
                numTest = true;
            };
        } else {
            // if user did not want numbers, set test flag to true (reduced amount of code doing it this way)
            numTest = true;
        };

        // if user wants special characters...
        if(inclSpec){
            if(regex.test(specChars.toString())){
                specTest = true;
            };
        } else {
            specTest = true;
        }
        
        // if the user wants uppercase
        if(inclUpper){
            if(regex.test(charsUpper.toString())){
                upperLowerTest = true;
            };
        } else {
            upperLowerTest = true;
        };
        
    };
    // log test results
    console.log(numTest, specTest, upperLowerTest);

    // if all tests pass return true
    // will return true if only lower case is chosen
    if(numTest && specTest && upperLowerTest){
        console.log("passed all checks");
        return true;
    };
}
    


generateButton.addEventListener("click", setUp)