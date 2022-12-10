
/* login page */
document.getElementById('submitButton').addEventListener('click', function () {

    //  email

    const emailInputText = document.getElementById('inputEmail');
    const emailText = emailInputText.value;
    //    console.log(emailText);

    //    password

    const PasswordInputText = document.getElementById('inputPassword');
    const PasswordText = PasswordInputText.value;

    if (emailText == 'admin@admin.com' && PasswordText == 123456) {
        window.location.href = 'banking.html'
        // console.log(PasswordText);
    }

})


/* banking page css */


