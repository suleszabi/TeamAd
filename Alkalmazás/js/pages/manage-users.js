loginCheck();

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    validateNewUserForm();
    loadUsers();
    document.getElementById('newUserFormHeader').onclick = () => {
        const newUserFormContainer = document.getElementById('newUserFormContainer');
        newUserFormContainer.style.display = (newUserFormContainer.style.display == '') ? 'block' : '';
    }
    document.getElementById('newUserForm').onsubmit = (e) => {
        e.preventDefault();
        createNewUser();
    }
    const inputElements = document.getElementsByTagName('input');
    for(let input of inputElements) {
        input.onkeyup = validateNewUserForm;
        input.setAttribute('autocomplete', 'off');
    }
});