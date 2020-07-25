// const form = document.getElementById('register-form');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const username = document.getElementById('username');
// const email = document.getElementById('username');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// var checkInputs = () => {
//     //Obtain the values from the inputs.
//     const fnameValue = fnmae.value.trim();
//     const lnameValue = lname.value.trim();
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const letters = /^[A-z]+$/;



//     //Validating for the first name.
//     if (fnameValue == '') {
//         //show error
//         //add error class.
//         setErrorFor(fname, 'required');
//     } else if (!fnameValue.match(letters)) {
//         setErrorFor(fname, 'first name cannot be in numbers')
//     } else {
//         //add success class.
//         setSuccessFor(fname);
//     }
// }


// function setErrorFor(input, message){

//     //for the div class.
//     const formInput = input.parentElement;
//     const small = formInput.querySelector('small');


//     // Adding the message for the error for the small Tag.
//     small.innerText = message;


//     // Adding error class.
//     formInput.className = "from-input error"
// }

// function setSuccessFor(input) {
//     const formInput = input.parentElement;
//     formInput.className = 'form-input success';
// } 





