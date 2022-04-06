loginCheck();
let order = 'id-asc';

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    validateParticipantForm();
    loadParticipants();
    document.getElementById('newParticipantFormHeader').onclick = () => {
        const newParticiapantFormContainer = document.getElementById('newParticipantFormContainer');
        newParticiapantFormContainer.style.display = (newParticiapantFormContainer.style.display == '') ? 'block' : '';
    }
    document.getElementById('newParticipantForm').onsubmit = (e) => {
        e.preventDefault();
        createNewParticipant();
    }
    const newParticipantInputElements = document.getElementsByClassName('newParticipantInput');
    for(let newParticipantInput of newParticipantInputElements) {
        newParticipantInput.onkeyup = validateParticipantForm;
        newParticipantInput.onchange = validateParticipantForm;
        newParticipantInput.setAttribute('autocomplete', 'off');
    }
    const searchInputElements = document.getElementsByClassName('searchInput');
    for(searchInput of searchInputElements) {
        searchInput.onkeyup = () => {
            loadParticipants();
        }
    }
    document.getElementById('coursesForParticipantModalCloseBtn').onclick = () => {
        document.getElementById('coursesForParticipantModal').style.display = 'none';
        document.getElementById('participantNameToCourse').innerHTML = '';
        document.getElementById('coursesForParticipantTableBody').innerHTML = '';
    }
});