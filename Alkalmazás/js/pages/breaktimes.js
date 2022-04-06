loginCheck();

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    loadBreaktimes();
    document.getElementById('newBreaktimeForm').onsubmit = (e) => {
        e.preventDefault();
        createNewBreaktime();
    }
});