const validateNewCourseForm = () => {
    const courseNameInput = document.getElementById('courseNameInput');
    const courseNameFeedback = document.getElementById('courseNameFeedback');
    const newCourseFormSubmitBtn = document.getElementById('newCourseFormSubmitBtn');

    let courseNameOk = false;
    let courseNameFeedbackText = '';
    if(courseNameInput.value.length < 9) {
        courseNameFeedbackText = 'Rövidebb, mint 9 karakter';
    } else if(courseNameInput.value.length > 40) {
        courseNameFeedbackText = 'Hosszabb, mint 40 karakter';
    } else {
        courseNameFeedbackText = 'Rendben';
        courseNameOk = true;
    }
    if(courseNameOk) {
        courseNameInput.classList.add('is-valid');
        courseNameInput.classList.remove('is-invalid');
        courseNameFeedback.classList.add('valid-feedback');
        courseNameFeedback.classList.remove('invalid-feedback');
    } else {
        courseNameInput.classList.add('is-invalid');
        courseNameInput.classList.remove('is-valid');
        courseNameFeedback.classList.add('invalid-feedback');
        courseNameFeedback.classList.remove('valid-feedback');
    }
    courseNameFeedback.innerHTML = courseNameFeedbackText;

    if(courseNameOk) {
        newCourseFormSubmitBtn.disabled = false;
    } else {
        newCourseFormSubmitBtn.disabled = true;
    }
}