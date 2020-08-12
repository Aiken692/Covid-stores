// Defining a function to display error message.
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}


const form_pdt = document.getElementById('form');


form_pdt.addEventListener('submit', (e) => {
    // Defining a function to validate form.
    // Retrieving the values of form elements.
    var pdtName = document.getElementById('productName').value;
    var Make = document.getElementById('make').value;





    // Defining error variables with a default value.
    var nameErr = makeErr = true

    // Validate for product name.
    if (pdtName == "") {
        printError("nameErr", "Plese enter the product name")
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }


    // Validation for the make.
    if (Make = ""){
        printError("makeErr", "Please enter the make.")
    } else {
        printError("makeErr", "");
        makeErr = false;
    }

    // Prevent the form from being submitted if there are any errors.
    if ((nameErr || makeErr) == true) {
        // e.preventDefault();
        alert("something failed")
    } else {
        // e.currentTarget.submit();
        alert("Successful")
    }


});