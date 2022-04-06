loginCheck();

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    validateNewCourseForm();
    loadCourses();
    document.getElementById('newCourseFormHeader').onclick = () => {
        const newUserFormContainer = document.getElementById('newCourseFormContainer');
        newUserFormContainer.style.display = (newUserFormContainer.style.display == '') ? 'block' : '';
    }
    document.getElementById('newCourseForm').onsubmit = (e) => {
        e.preventDefault();
        createNewCourse();
    }
    const inputElements = document.getElementsByTagName('input');
    for(let input of inputElements) {
        input.onkeyup = validateNewCourseForm;
        input.setAttribute('autocomplete', 'off');
    }
});