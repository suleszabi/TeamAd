const loadParticipantName = async (participantId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getParticipantName',
            'participantId':participantId
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj != false) {
        document.getElementById('toInput').value = respondObj.full_name;
    } else {
        location.href = './participants.html';
    }
}