const validatePasswordChangeForm = () => {
    const oldPasswordInput = document.getElementById('oldPasswordInput');
    const oldPasswordFeedback = document.getElementById('oldPasswordFeedback');
    const newPasswordInput = document.getElementById('newPasswordInput');
    const newPasswordFeedback = document.getElementById('newPasswordFeedback');
    const newPasswordConfirmInput = document.getElementById('newPasswordConfirmInput');
    const newPasswordConfirmFeedback = document.getElementById('newPasswordConfirmFeedback');
    const passwordChangeFormSubmitBtn = document.getElementById('passwordChangeFormSubmitBtn');

    let oldPasswordOk = false;
    let oldPasswordFeedbackText = '';
    if(oldPasswordInput.value.length < 8) {
        oldPasswordFeedbackText = 'Rövidebb, mint 8 karakter!';
    } else if(oldPasswordInput.value.length > 64) {
        oldPasswordFeedbackText = 'Hosszabb, mint 64 karakter!';
    } else {
        oldPasswordFeedbackText = 'Rendben';
        oldPasswordOk = true;
    }
    if(oldPasswordOk) {
        oldPasswordInput.classList.add('is-valid');
        oldPasswordInput.classList.remove('is-invalid');
        oldPasswordFeedback.classList.add('valid-feedback');
        oldPasswordFeedback.classList.remove('invalid-feedback');
    } else {
        oldPasswordInput.classList.add('is-invalid');
        oldPasswordInput.classList.remove('is-valid');
        oldPasswordFeedback.classList.add('invalid-feedback');
        oldPasswordFeedback.classList.remove('valid-feedback');
    }
    oldPasswordFeedback.innerHTML = oldPasswordFeedbackText;

    let newPasswordOk = false;
    let newPasswordFeedbackText = '';
    if(newPasswordInput.value.length < 8) {
        newPasswordFeedbackText = 'Rövidebb, mint 8 karakter!';
    } else if(newPasswordInput.value.length > 64) {
        newPasswordFeedbackText = 'Hosszabb, mint 64 karakter!';
    } else {
        let validatenewPasswordResult = validatePassword(newPasswordInput.value);
        if(validatenewPasswordResult == 'noLowerCases') {
            newPasswordFeedbackText = 'Nem tartalmaz kisbetűt';
        } else if(validatenewPasswordResult == 'noUpperCases') {
            newPasswordFeedbackText = 'Nem tartalmaz nagybetűt';
        } else if(validatenewPasswordResult == 'noNumbers') {
            newPasswordFeedbackText = 'Nem tartalmaz számot';
        } else if(validatenewPasswordResult == 'ok') {
            newPasswordFeedbackText = 'Rendben';
            newPasswordOk = true;
        }
    }
    if(newPasswordOk) {
        newPasswordInput.classList.add('is-valid');
        newPasswordInput.classList.remove('is-invalid');
        newPasswordFeedback.classList.add('valid-feedback');
        newPasswordFeedback.classList.remove('invalid-feedback');
    } else {
        newPasswordInput.classList.add('is-invalid');
        newPasswordInput.classList.remove('is-valid');
        newPasswordFeedback.classList.add('invalid-feedback');
        newPasswordFeedback.classList.remove('valid-feedback');
    }
    newPasswordFeedback.innerHTML = newPasswordFeedbackText;

    let newPasswordConfirmOk = false;
    let newPasswordConfirmFeedbackText = '';
    if(newPasswordConfirmInput.value == '') {
        newPasswordConfirmFeedbackText = 'Nincs megadva';
    } else if(newPasswordConfirmInput.value != newPasswordInput.value) {
        newPasswordConfirmFeedbackText = 'Nem egyezik';
    } else {
        newPasswordConfirmFeedbackText = 'Rendben';
        newPasswordConfirmOk = true;
    }
    if(newPasswordConfirmOk) {
        newPasswordConfirmInput.classList.add('is-valid');
        newPasswordConfirmInput.classList.remove('is-invalid');
        newPasswordConfirmFeedback.classList.add('valid-feedback');
        newPasswordConfirmFeedback.classList.remove('invalid-feedback');
    } else {
        newPasswordConfirmInput.classList.add('is-invalid');
        newPasswordConfirmInput.classList.remove('is-valid');
        newPasswordConfirmFeedback.classList.add('invalid-feedback');
        newPasswordConfirmFeedback.classList.remove('valid-feedback');
    }
    newPasswordConfirmFeedback.innerHTML = newPasswordConfirmFeedbackText;

    if(oldPasswordOk && newPasswordOk && newPasswordConfirmOk) {
        passwordChangeFormSubmitBtn.disabled = false;
    } else {
        passwordChangeFormSubmitBtn.disabled = true;
    }


}