// Defining a function to display error message.
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
    
}



const form_sale = document.getElementById('register-form');


form_sale.addEventListener('submit', (e) => {
    // Defining a function to validate form.
    // Retrieving the values of form elements.
    var fname = document.sale.fname.value;
    var lname = document.sale.lname.value;
    var email = document.sale.email.value;
    var username = document.sale.username.value;
    var password = document.sale.password.value;
    var phone = document.sale.phoneNumber.value;

    // Defining error variables with a default value.
    var nameErr = lnameErr = emailErr = passErr= phoneErr = true;
    
    // Validate fof first name.
    if(fname == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }

    }

    // Validating for last name.
    if(lname == "") {
        printError("lnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name")
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }


    // Validating username.
    if (username == "") {
         printError("userErr", "Please enter your username")
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false){
            printError("username", "Please enter your username")
        } else {
            printError("username", "");
            userErr = false;
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

    // Validating the password.
    if (password == "") {
        printError("passErr", "Please enter your password")
    } else {
        var regex = /^[a-zA-Z0-9\s]+$/;
        if(regex.test(password) === false) {
            printError("passErr", "Plese enter the password");
        } else {
            printError("passErr", "");
            passErr = false;
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
    



    // Prevent the form from being submitted if there are any errors.
    if ((nameErr || lnameErr || emailErr || userErr || passErr || phoneErr) == true) {
        e.preventDefault();
    } else {
        e.currentTarget.submit();
    }

});