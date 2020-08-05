// Defining a function to display error message.
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
    
}



const Customer_form = document.getElementById('customer');


Customer_form.addEventListener('submit', (e) => {
    // Defining a function to validate form.
    // Retrieving the values of form elements.
    var fname = document.cust.fullname.value;
    var phone = document.cust.phoneNumber.value;
    var item = document.cust.itemName.value;
    var nin = document.cust.nationalid.value;
    var email = document.cust.email.value;

    // Defininf error variables with a default value.
    var nameErr = phoneErr = itemErr = ninErr = true;

    // Validate for fullName.
    if (fname == ""){
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false){
         printError("nameErr", "Please enter a valid name");
        } else {
             printError("nameErr", "");
            nameErr = false;
        }
    }


    // Validating the phone number.
    if (phone == "") {
        printError("phoneErr", "Phone no. is required");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Phone should be numbers");
        } else {
            printError("phoneErr", "");
            passErr = false;
        }
    }

    // Validate for Item Name.
    if (item == ""){
        printError("itemErr", "Please enter item name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(item) === false){
         printError("itemErr", "Please enter a valid item name");
        } else {
             printError("itemErr", "");
            itemErr = false;
        }
    }

    // Validating for National ID.
    if (nin == ""){
        printError("ninErr", "Please enter the Nin ID");
    } else {
        var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
        if(regex.test(nin) === false){
            printError("ninErr", "Enter a valid nin Id");
        } else {
            printError("ninErr", "");
            ninErr = false;
        }
    }

     // Validating email address.
     if (email == "") {
        printError("emailErr", "Please enter your email")
    } else {
        // Regular expression for basic email validation.
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            
                printError("emailErr", "");
                emailErr = false;
            
        }
    }



    // Prevent the form from being submitted if there are any errors.
    if ((nameErr || phoneErr ) == true) {
        e.preventDefault();
    } else {
        e.currentTarget.submit();
    }
})