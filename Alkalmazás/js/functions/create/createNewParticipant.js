const createNewParticipant = async () => {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const birthplaceInput = document.getElementById('birthplaceInput');
    const birthdateInput = document.getElementById('birthdateInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createNewParticipant',
            'name':nameInput.value,
            'email':emailInput.value,
            'birthplace':birthplaceInput.value,
            'birthdate':birthdateInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createNewParticipant) {
        const newParticipantInputElements = document.getElementsByClassName('newParticipantInput');
        for(let newParticipantInput of newParticipantInputElements) {
            newParticipantInput.value = '';
        }
        validateParticipantForm();
        loadParticipants();
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2 mb-0 mt-3 text-center"><p class="fw-bold mb-0">A résztvevőt nem sikerült létrehozni!</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}