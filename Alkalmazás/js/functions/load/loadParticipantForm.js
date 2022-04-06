const loadParticipantForm = async (participantId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getparticipantData',
            'participantId':participantId
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj != false) {
        document.getElementById('nameInput').value = respondObj.full_name;
        document.getElementById('emailInput').value = respondObj.email;
        document.getElementById('birthplaceInput').value = respondObj.birthplace;
        document.getElementById('birthdateInput').value = respondObj.birthdate;
        validateParticipantForm();
    } else {
        location.href = './participants.html';
    }
}