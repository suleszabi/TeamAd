const validateNewUserForm = () => {
    const usernameInput = document.getElementById('usernameInput');
    const usernameFeedback = document.getElementById('usernameFeedback');
    const emailInput = document.getElementById('emailInput');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordInput = document.getElementById('passwordInput');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const passwordConfirmInput = document.getElementById('passwordConfirmInput');
    const passwordConfirmFeedback = document.getElementById('passwordConfirmFeedback');
    const newUserFormSubmitBtn = document.getElementById('newUserFormSubmitBtn');

    let usernameOk = false;
    let usernameFeedbackText = '';
    if(usernameInput.value.length < 5) {
        usernameFeedbackText = 'Rövidebb, mint 5 karakter';
    } else if(usernameInput.value.length > 10) {
        usernameFeedbackText = 'Hosszabb, mint 10 karakter';
    } else {
        usernameFeedbackText = 'Rendben';
        usernameOk = true;
    }
    if(usernameOk) {
        usernameInput.classList.add('is-valid');
        usernameInput.classList.remove('is-invalid');
        usernameFeedback.classList.add('valid-feedback');
        usernameFeedback.classList.remove('invalid-feedback');
    } else {
        usernameInput.classList.add('is-invalid');
        usernameInput.classList.remove('is-valid');
        usernameFeedback.classList.add('invalid-feedback');
        usernameFeedback.classList.remove('valid-feedback');
    }
    usernameFeedback.innerHTML = usernameFeedbackText;

    let emailOk = false;
    let emailFeedbackText = '';
    if(!validateEmail(emailInput.value)) {
        emailFeedbackText = 'Helytelen formátum';
    } else if(emailInput.value.length > 50) {
        emailFeedbackText = 'Hosszabb, mint 50 karakter';
    } else {
        emailFeedbackText = 'Rendben';
        emailOk = true;
    }
    if(emailOk) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        emailFeedback.classList.add('valid-feedback');
        emailFeedback.classList.remove('invalid-feedback');
    } else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        emailFeedback.classList.add('invalid-feedback');
        emailFeedback.classList.remove('valid-feedback');
    }
    emailFeedback.innerHTML = emailFeedbackText;

    let passwordOk = false;
    let passwordFeedbackText = '';
    if(passwordInput.value.length < 8) {
        passwordFeedbackText = 'Rövidebb, mint 8 karakter!';
    } else if(passwordInput.value.length > 64) {
        passwordFeedbackText = 'Hosszabb, mint 64 karakter!';
    } else {
        let validatePasswordResult = validatePassword(passwordInput.value);
        if(validatePasswordResult == 'noLowerCases') {
            passwordFeedbackText = 'Nem tartalmaz kisbetűt';
        } else if(validatePasswordResult == 'noUpperCases') {
            passwordFeedbackText = 'Nem tartalmaz nagybetűt';
        } else if(validatePasswordResult == 'noNumbers') {
            passwordFeedbackText = 'Nem tartalmaz számot';
        } else if(validatePasswordResult == 'ok') {
            passwordFeedbackText = 'Rendben';
            passwordOk = true;
        }
    }
    if(passwordOk) {
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        passwordFeedback.classList.add('valid-feedback');
        passwordFeedback.classList.remove('invalid-feedback');
    } else {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        passwordFeedback.classList.add('invalid-feedback');
        passwordFeedback.classList.remove('valid-feedback');
    }
    passwordFeedback.innerHTML = passwordFeedbackText;

    let passwordConfirmOk = false;
    let passwordConfirmFeedbackText = '';
    if(passwordConfirmInput.value == '') {
        passwordConfirmFeedbackText = 'Nincs megadva';
    } else if(passwordConfirmInput.value != passwordInput.value) {
        passwordConfirmFeedbackText = 'Nem egyezik';
    } else {
        passwordConfirmFeedbackText = 'Rendben';
        passwordConfirmOk = true;
    }
    if(passwordConfirmOk) {
        passwordConfirmInput.classList.add('is-valid');
        passwordConfirmInput.classList.remove('is-invalid');
        passwordConfirmFeedback.classList.add('valid-feedback');
        passwordConfirmFeedback.classList.remove('invalid-feedback');
    } else {
        passwordConfirmInput.classList.add('is-invalid');
        passwordConfirmInput.classList.remove('is-valid');
        passwordConfirmFeedback.classList.add('invalid-feedback');
        passwordConfirmFeedback.classList.remove('valid-feedback');
    }
    passwordConfirmFeedback.innerHTML = passwordConfirmFeedbackText;

    if(usernameOk && emailOk && passwordOk && passwordConfirmOk) {
        newUserFormSubmitBtn.disabled = false;
    } else {
        newUserFormSubmitBtn.disabled = true;
    }
}