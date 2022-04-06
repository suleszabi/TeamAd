const validateCourseNameChangeForm = () => {
    const newCourseNameInput = document.getElementById('newCourseNameInput');
    const newCourseNameFeedback = document.getElementById('newCourseNameFeedback');
    const courseNameChangeFormSubmitBtn = document.getElementById('courseNameChangeFormSubmitBtn');

    let newCourseNameOk = false;
    let newCourseNameFeedbackText = '';
    if(newCourseNameInput.value.length < 9) {
        newCourseNameFeedbackText = 'Rövidebb, mint 9 karakter';
    } else if(newCourseNameInput.value.length > 40) {
        newCourseNameFeedbackText = 'Hosszabb, mint 40 karakter';
    } else {
        newCourseNameFeedbackText = 'Rendben';
        newCourseNameOk = true;
    }
    if(newCourseNameOk) {
        newCourseNameInput.classList.add('is-valid');
        newCourseNameInput.classList.remove('is-invalid');
        newCourseNameFeedback.classList.add('valid-feedback');
        newCourseNameFeedback.classList.remove('invalid-feedback');
    } else {
        newCourseNameInput.classList.add('is-invalid');
        newCourseNameInput.classList.remove('is-valid');
        newCourseNameFeedback.classList.add('invalid-feedback');
        newCourseNameFeedback.classList.remove('valid-feedback');
    }
    newCourseNameFeedback.innerHTML = newCourseNameFeedbackText;

    if(newCourseNameOk) {
        courseNameChangeFormSubmitBtn.disabled = false;
    } else {
        courseNameChangeFormSubmitBtn.disabled = true;
    }
}