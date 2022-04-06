loginCheck();

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    validatePasswordChangeForm();
    document.getElementById('passwordChangeForm').onsubmit = (e) => {
        e.preventDefault();
        changePassword();
    }
    const inputElements = document.getElementsByTagName('input');
    for(let input of inputElements) {
        input.onkeyup = validatePasswordChangeForm;
        input.setAttribute('autocomplete', 'off');
    }
});