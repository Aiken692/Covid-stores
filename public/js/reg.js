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
    var user = document.sale.username.value;
    var email = document.sale.email.value;
    var password = document.sale.password.value;
    var nin = document.sale.nationalid.value;
    

    

    // Defining error variables with a default value.
    var nameErr = lnameErr = userErr = emailErr = passErr = ninErr = true;
    
    // Validate for first name.
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
    if (user == "") {
         printError("userErr", "Please enter your username")
    } else {
            printError("userErr", "");
            userErr = false;
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

    //Validating the password.
    if (password == "") {
        printError("passErr", "Please enter your password")
    } else {
            printError("passErr", "");
            passErr = false;
    }

    // Validating the National ID.
    if (nin == "") {
        printError("ninErr", "Please Enter the Nin ID")
    } else {
        var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
        if (regex.test(nin) === false){
            printError("ninErr", "Enter a valid nin Id")
        } else {
            printError("ninErr", "");
            ninErr = false;
        }
    }

  //  Validating the phone number.
    // if (phone == "") {
    //     printError("phoneErr", "Phone no. is required");
    // } else {
    //     var regex = /^\d{10}$/;
    //     if(regex.test(phone) === false) {
    //         printError("phoneErr", "Phone should be numbers");
    //     } else {
    //         printError("phoneErr", "");
    //         phoneErr = false;
    //     }
    // }
    



    // Prevent the form from being submitted if there are any errors.
    if ((nameErr || lnameErr || userErr || emailErr || passErr || ninErr) == true) {
        e.preventDefault();
        // alert("something failed")
    } else {
        e.currentTarget.submit();
        // alert("Successful")
    }

});