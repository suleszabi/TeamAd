loginCheck();
const participantId = parseInt(getValueFromUrl('participantId'));
if(isNaN(participantId)) {
    location.href = './participants.html';
}

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    loadParticipantForm(participantId);
    document.getElementById('editParticipantForm').onsubmit = (e) => {
        e.preventDefault();
        changeParticipantData(participantId);
    }
    const newParticipantInputElements = document.getElementsByClassName('newParticipantInput');
    for(let newParticipantInput of newParticipantInputElements) {
        newParticipantInput.onkeyup = validateParticipantForm;
        newParticipantInput.onchange = validateParticipantForm;
        newParticipantInput.setAttribute('autocomplete', 'off');
    }
});