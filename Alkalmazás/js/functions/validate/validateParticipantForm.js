const validateParticipantForm = () => {
    const nameInput = document.getElementById('nameInput');
    const nameFeedback = document.getElementById('nameFeedback');
    const emailInput = document.getElementById('emailInput');
    const emailFeedback = document.getElementById('emailFeedback');
    const birthplaceInput = document.getElementById('birthplaceInput');
    const birthplaceFeedback = document.getElementById('birthplaceFeedback');
    const birthdateInput = document.getElementById('birthdateInput');
    const birthdateFeedback = document.getElementById('birthdateFeedback');
    const newParticipantFormSubmitBtn = document.getElementById('participantFormSubmitBtn');

    let nameOk = false;
    let nameFeedbackText = '';
    if(nameInput.value.length < 6) {
        nameFeedbackText = 'Rövidebb, mint 6 karakter';
    } else if(nameInput.value.length > 40) {
        nameFeedbackText = 'Hosszabb, mint 40 karakter';
    } else {
        nameFeedbackText = 'Rendben';
        nameOk = true;
    }
    if(nameOk) {
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        nameFeedback.classList.add('valid-feedback');
        nameFeedback.classList.remove('invalid-feedback');
    } else {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameFeedback.classList.add('invalid-feedback');
        nameFeedback.classList.remove('valid-feedback');
    }
    nameFeedback.innerHTML = nameFeedbackText;

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

    let birthplaceOk = false;
    let birthplaceFeedbackText = '';
    if(birthplaceInput.value.length < 2) {
        birthplaceFeedbackText = 'Rövidebb, mint 2 karakter!';
    } else if(birthplaceInput.value.length > 20) {
        birthplaceFeedbackText = 'Hosszabb, mint 20 karakter!';
    } else {
        birthplaceOk = true;
    }
    if(birthplaceOk) {
        birthplaceInput.classList.add('is-valid');
        birthplaceInput.classList.remove('is-invalid');
        birthplaceFeedback.classList.add('valid-feedback');
        birthplaceFeedback.classList.remove('invalid-feedback');
    } else {
        birthplaceInput.classList.add('is-invalid');
        birthplaceInput.classList.remove('is-valid');
        birthplaceFeedback.classList.add('invalid-feedback');
        birthplaceFeedback.classList.remove('valid-feedback');
    }
    birthplaceFeedback.innerHTML = birthplaceFeedbackText;

    let birthdateOk = false;
    let birthdateFeedbackText = '';
    if(birthdateInput.value.length != 10) {
        birthdateFeedbackText = 'Nincs megadva';
    } else {
        birthdateFeedbackText = 'Rendben';
        birthdateOk = true;
    }
    if(birthdateOk) {
        birthdateInput.classList.add('is-valid');
        birthdateInput.classList.remove('is-invalid');
        birthdateFeedback.classList.add('valid-feedback');
        birthdateFeedback.classList.remove('invalid-feedback');
    } else {
        birthdateInput.classList.add('is-invalid');
        birthdateInput.classList.remove('is-valid');
        birthdateFeedback.classList.add('invalid-feedback');
        birthdateFeedback.classList.remove('valid-feedback');
    }
    birthdateFeedback.innerHTML = birthdateFeedbackText;

    if(nameOk && emailOk && birthplaceOk && birthdateOk) {
        newParticipantFormSubmitBtn.disabled = false;
    } else {
        newParticipantFormSubmitBtn.disabled = true;
    }
}