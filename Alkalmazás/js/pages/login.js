loginCheck(true);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').onsubmit = (e) => {
        e.preventDefault();
        userLogin();
    }
});