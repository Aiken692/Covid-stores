// Defining a function to display error message.
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
    
}


const admin = document.getElementById('admin');



admin.addEventListener('submit', (e) => {
    // Defining a function to validate the form
    // Retrieving the values of theh form elements.
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


// Defing errorvarriables with a default value.
var userErr = passErr = true;

// Validate for user name.
if (user == "") {
    printError("userErr", " Please enter your User name")
} else {
    printError("userErr", "");
    userErr = false;
}

 //Validating the password.
 if (pass == "") {
    printError("passErr", "Please enter your password")
} else {
        printError("passErr", "");
        passErr = false;
}


// Prevent the form from being submitted if there are any errors.
if (( userErr || passErr) == true) {
    e.preventDefault();
    // alert("something failed")
} else {
    e.currentTarget.submit();
    // alert("Successful")
}



})
