const deleteParticipant = async (idToDelete) => {
    if(confirm('Biztosan törölni szeretnéd a résztvevőt?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deleteParticipant',
                'participantId':idToDelete
            }
        );
        respondObj = JSON.parse(respondText);
        if(respondObj.deleteParticipant) {
            loadParticipants();
        }
    }
}