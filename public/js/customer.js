// Defining a function to display error message.
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
    
}



const Customer_form = document.getElementById('customer');


Customer_form.addEventListener('submit', (e) => {
    // Defining a function to validate form.
    // Retrieving the values of form elements.
    var fname = document.cust.fullname.value;
    var email = document.cust.email.value;
    var nin = document.cust.nationalid.value;
    var item = document.cust.itemName.value;
    
   

    // Defining error variables with a default value.
    var nameErr = emailErr = ninErr = itemErr = true;

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

    





    // Prevent the form from being submitted if there are any errors.
    if ((nameErr || emailErr || ninErr || itemErr) == true) {
        e.preventDefault();
        // alert('Failed')
    } else {
        e.currentTarget.submit();
        // alert('successful')
    }
})


