const deletePartCourse = async (courseId, participantId) => {
    if(confirm('Biztosan ki szeretnéd sorolni a résztvevőt?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deletePartCourse',
                'courseId':courseId,
                'participantId':participantId
            }
        );
        const respondObj = JSON.parse(respondText);
        if(respondObj.deletePartCourse) {
            loadParticipantsForCourse(courseId);
        } else {
            alert('A résztvevő kisorolása sikertelen volt!');
        }
    }
}